import { DatePicker, Layout, Typography, notification } from "antd";
import { get } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FlexBox } from "src/controls";
import { API } from "src/rest/api";
import Utils from "src/utils/Utils";
import { Subscribe } from "./Subscribe";
import dayjs from "dayjs";

const checkGroupId = (groupId?: string) => !groupId || Number(groupId) < 0;

type SubscribesState = {
  new: VkData.Subscribes[];
  unsubscribes: VkData.Subscribes[];
};

const currentDate = dayjs().format("YYYY-MM-DD");

const Group = () => {
  const [date, setDate] = useState<string | null | undefined>(
    () => currentDate
  );
  const [subscribes, setSubscribes] = useState<SubscribesState | null>(null);
  const { groupId } = useParams<{ groupId: string }>();

  const _getSubscribes = useCallback(async () => {
    if (!groupId) {
      notification.error({
        message: "Ошибка",
        description: "Не указан идентификатор",
      });
      return;
    }
    try {
      const result = await API.get(
        `${
          import.meta.env.VITE_BACKEND_HOST
        }/subscribes/${groupId}?date=${date}`
      );
      if (!(result instanceof Error)) {
        setSubscribes(get(result, "data", null));
      }
    } catch (er) {
      Utils.notificationError(er);
    }
  }, [groupId, date]);

  useEffect(() => {
    _getSubscribes();
  }, [_getSubscribes]);

  if (checkGroupId(groupId)) {
    return <Typography.Title level={1}>Неверный groupId</Typography.Title>;
  }
  return (
    <Layout.Content>
      <DatePicker
        placeholder="Дата, с которой сравнить"
        format="DD.MM.YYYY"
        onChange={(v) => {
          if (!v) {
            setDate(currentDate);
          }
          setDate(v?.format("YYYY-MM-DD"));
        }}
      />
      <FlexBox direction="column" gap="large">
        <div>
          <Typography.Title level={4}>Новые подписчики</Typography.Title>
          <FlexBox gap="default">
            {subscribes?.new.map((n) => (
              <Subscribe key={n.id} {...n} />
            ))}
          </FlexBox>
        </div>
        <div>
          <Typography.Title level={4}>Отписавшиеся</Typography.Title>
          <FlexBox gap="default">
            {subscribes?.unsubscribes.map((n) => (
              <Subscribe key={n.id} {...n} />
            ))}
          </FlexBox>
        </div>
      </FlexBox>
    </Layout.Content>
  );
};

export default Group;

import { useCallback, useEffect, useState } from "react";
import { Typography, notification } from "antd";
import { FlexBox } from "src/controls";
import { get } from "lodash";
import { API } from "src/rest/api";
import { useNavigate } from "react-router-dom";
import { GROUP_PAGE } from "src/AppUrls";

const MainPage = () => {
  const [groups, setGroups] = useState<VkData.Data[]>([]);
  const nav = useNavigate();
  const _getGroups = useCallback(async () => {
    try {
      const result = await API.post(
        `${import.meta.env.VITE_BACKEND_HOST}/vk/groups.get`,
        {
          extended: 1,
          filter: "admin",
          fields: "links",
        }
      );
      if (result && !(result instanceof Error)) {
        setGroups(get(result, "data.response.items", []));
      }
    } catch (er) {
      notification.error({
        message: "Ошибка запроса",
        description: get(er, "message"),
      });
    }
  }, []);

  const onClickGroup = useCallback(
    (groupId: number) => {
      nav(GROUP_PAGE.replace(":groupId", groupId.toString()));
    },
    [nav]
  );

  useEffect(() => {
    _getGroups();
  }, [_getGroups]);

  return (
    <FlexBox gap="mini" direction="column">
      <Typography.Title level={3}>Список групп и сообществ</Typography.Title>
      <FlexBox
        justify="center"
        alignItems="center"
        direction="column"
        gap="large"
      >
        {groups.map((g) => (
          <FlexBox
            key={g.id}
            alignItems="center"
            direction="column"
            style={{ cursor: "pointer" }}
            onClick={() => onClickGroup(g.id)}
          >
            <img src={g.photo_50} />
            <Typography.Title level={5} style={{ margin: 0 }}>
              {g.name}
            </Typography.Title>
          </FlexBox>
        ))}
      </FlexBox>
    </FlexBox>
  );
};

export default MainPage;

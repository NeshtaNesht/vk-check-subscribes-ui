import { FlexBox } from "src/controls";

export const Subscribe = ({
  first_name,
  id,
  screen_name,
  last_name,
  photo_200,
}: VkData.Subscribes) => {
  return (
    <a
      key={id}
      href={`https://vk.com/${screen_name}`}
      target="_blank"
      rel="noreferrer"
    >
      <FlexBox direction="column" gap="mini" style={{ cursor: "pointer" }}>
        <img src={photo_200} />
        <strong>{`${last_name} ${first_name}`}</strong>
      </FlexBox>
    </a>
  );
};

declare namespace VkData {
  type Data = {
    id: number;
    name: string;
    screen_name: string;
    is_closed: number;
    type: string;
    photo_50: string;
    photo_100: string;
    photo_200: string;
  };

  type Subscribes = {
    id: string;
    photo_200: string;
    mobile_phone?: string;
    home_phone: string;
    first_name: string;
    last_name: string;
    can_access_closed: boolean;
    is_closed: boolean;
    screen_name?: string;
  };
}

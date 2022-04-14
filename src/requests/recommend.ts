import { ajaxGet } from "@/utils/http";
import { GET_BANNERS } from "@/configs/api";
export enum BannerTypeEnum {
  PC = 0,
  ANDROID = 1,
  IPHONE = 2,
  IPAD = 3,
}

/**
 * 请求banner数据
 * @param type 终端类型
 */
export const httpGetBanners = (type: BannerTypeEnum) => {
  return ajaxGet(GET_BANNERS, { type });
};
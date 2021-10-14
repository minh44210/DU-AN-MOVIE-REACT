import { quanLyRapService } from "../services/QuanlyRap";
import { HE_THONG_RAP } from "../QuanLyRapType";
export const layDanhSachHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap();
      console.log("resutl", result.data.content);
      if (result.status === 200) {
        dispatch({
          type: HE_THONG_RAP,
          heThongRapChieu: result.data.content,
        });
      }
    } catch (errors) {
      console.log("errors", errors.respone?.data.content);
    }
  };
};

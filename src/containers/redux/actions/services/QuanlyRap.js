import { baseService } from "../baseServives/baseServices";

export class QuanlyRapService extends baseService {
  layDanhSachHeThongRap = () => {
    return this.get("api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP08");
  };
}
export const quanLyRapService = new QuanlyRapService();

const { ObjectId } = require("mongodb");
class Matter {
    constructor(client){
        this.Matter = client.db().collection("matter");
        this.TypeService = client.db().collection("typeService")
        this.Service = client.db().collection("service")
        this.User = client.db().collection("user")
        this.TypePay = client.db().collection("typePay");
        this.TimePay = client.db().collection("timePay");
        this.Task = client.db().collection("task");
    }

    // define csdl
    extractConactData(payload){
        const matter = {
            ten_vu_viec: payload.ten_vu_viec,
            mo_ta_vu_viec: payload.mo_ta_vu_viec,
            linh_vuc: payload.linh_vuc,
            dich_vu: payload.dich_vu,
            luat_su: payload.luat_su,
            khach_hang: payload.khach_hang,
            truy_cap: payload.truy_cap,
            phi_co_dinh: payload.phi_co_dinh,
            cong_viec: payload.cong_viec,
            tai_lieu: payload.tai_lieu,
            chi_phi: payload.chi_phi,
            lien_he: payload.lien_he,
            phuong_thuc_tinh_phi: payload.phuong_thuc_tinh_phi,
            dieu_khoan_thanh_toan: payload.dieu_khoan_thanh_toan,
            chiet_khau_hoa_hong: payload.chiet_khau_hoa_hong,
            status: payload.status

        };

        Object.keys(matter).forEach(
            (key) => matter[key] === undefined && delete matter[key]
        );
        return matter;
    }

    async findAll(){
        const result = await this.Matter.find();
        return result.toArray();
    }
    async findByStatus(statusP){
        const result = await this.Matter.find({status: Number (statusP)});
        return result.toArray();
    }
    async findById(id){
        id = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null
        };
        const result = await this.Matter.findOne(id);
        return result;
    }

    async create(payload){
        const matter = this.extractConactData(payload);
        const typeService = await this.TypeService.findOne({ _id: matter.linh_vuc })
        const service = await this.Service.findOne({ _id: new ObjectId(matter.dich_vu)})
        const cusomer = await this.User.findOne({ _id: new ObjectId(matter.khach_hang)})
        const staff = await this.User.findOne({ _id: new ObjectId(matter.luat_su)})
        const phuong_thuc_tinh_phi = await this.TypePay.findOne(
            { _id: new ObjectId(payload.phuong_thuc_tinh_phi)});
        const dieu_khoan_thanh_toan = await this.TimePay.findOne(
            { _id: new ObjectId(payload.dieu_khoan_thanh_toan) });
        const newData = {
            ...matter,
            linh_vuc: typeService,
            dich_vu: service,
            khach_hang: cusomer,
            luat_su: staff,
            phuong_thuc_tinh_phi: phuong_thuc_tinh_phi,
            dieu_khoan_thanh_toan: dieu_khoan_thanh_toan
        }
        const result = await this.Matter.insertOne(newData);
        return result;
    }

    async update(id, payload){
        id = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null
        };
        const matter = this.extractConactData(payload);
        const typeService = await this.TypeService.findOne({ _id: matter.linh_vuc })
        const service = await this.Service.findOne({ _id: new ObjectId(matter.dich_vu)})
        const cusomer = await this.User.findOne({ _id: new ObjectId(matter.khach_hang)})
        const staff = await this.User.findOne({ _id: new ObjectId(matter.luat_su)})
        const phuong_thuc_tinh_phi = await this.TypePay.findOne(
            { _id: new ObjectId(payload.phuong_thuc_tinh_phi)});
        const dieu_khoan_thanh_toan = await this.TimePay.findOne(
            { _id: new ObjectId(payload.dieu_khoan_thanh_toan) });
        const newData = {
            ...matter,
            linh_vuc: typeService,
            dich_vu: service,
            khach_hang: cusomer,
            luat_su: staff,
            phuong_thuc_tinh_phi: phuong_thuc_tinh_phi,
            dieu_khoan_thanh_toan: dieu_khoan_thanh_toan
        }
        const result = await this.Matter.findOneAndUpdate(
            id,
            { $set: newData },
            { returnDocument: "after" }
        );
        return result.value;
    }

    async delete(id){
        id = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null
        };
        const result = await this.Matter.findOneAndDelete(id);
        return result.value;
    }
}

module.exports = Matter;
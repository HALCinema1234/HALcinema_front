// ===============================================================
// PUT reserve/
// ===============================================================
// 予約情報登録
export type Reserve = {
    manage_id: number;      // 上映管理ID
    member_id: number;      // 会員ID
    // name: string;           // (ゲスト)お客様名
    // tel: string;            // (ゲスト)電話番号
    // mail: string;           // (ゲスト)メールアドレス
    seat: SeatInfo[];       // 予約した座席情報
};

// 予約情報
export type ReservInfo = {
    id: number;             // 予約ID
    manage_id: number;      // 上映管理ID
    member_id: number;      // 会員ID
    // name: string;           // (ゲスト)お客様名
    // tel: string;            // (ゲスト)電話番号
    // mail: string;           // (ゲスト)メールアドレス
    seat: SeatInfo[];       // 予約した座席情報
};

// 予約した座席情報
export type SeatInfo = {
    name: string;           // 座席名
    ticket: number;         // 券種ID
};

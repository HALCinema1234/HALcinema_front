// ===============================================================
// PUT reserve/
// ===============================================================
// 予約情報登録
export type TReserve = {
    manage_id: number; // 上映管理ID
    member_id: number; // 会員ID
    // name: string;           // (ゲスト)お客様名
    // tel: string;            // (ゲスト)電話番号
    // mail: string;           // (ゲスト)メールアドレス
    seat: TSeatInfo[]; // 予約した座席情報
};

// 予約情報
export type TReservInfo = {
    id: number; // 予約ID
    manage_id: number; // 上映管理ID
    member_id: number; // 会員ID
    // name: string;           // (ゲスト)お客様名
    // tel: string;            // (ゲスト)電話番号
    // mail: string;           // (ゲスト)メールアドレス
    seat: TSeatInfo[]; // 予約した座席情報
};

// 予約した座席情報
export type TSeatInfo = {
    name: string; // 座席名
    ticket: number; // 券種ID
};

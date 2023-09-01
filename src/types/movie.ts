// ===============================================================
// GET movies/
// ===============================================================
// 映画のリストを取得
export type TMovie = {
    id: number; // 映画ID
    title: string; // 映画タイトル
    thumbnail: string; // 映画サムネイル
    start: string; // 公開開始日
    end: string; // 公開終了日
    on_air: boolean; // 公開中(1:true)/公開予定(0:false)か
    age_restrictions: string; // 年齢制限
    data: string; // 映画のデータ(監督、出演など)
    introduction: string; // イントロダクション
    time: number; // 映画の長さ(分)
    types: string[]; // 上映種別
    images: string[]; // スクリーンショット
    manages: TManage[]; // 公開スケジュール
};

// 公開スケジュール
export type TManage = {
    id: number; // 上映管理ID
    movie_id: number; // 映画ID
    day: string; // 上映日
    start: string; // 上映開始時間
    end: string; // 上映終了時間
    screening_time: number; // 上映時間(分)
    theater_id: number; // シアター番号
    all_seats: number; // 全座席数
    type: string[]; // 上映種別
};

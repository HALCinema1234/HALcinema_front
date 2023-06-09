// ===============================================================
// GET movies/
// ===============================================================
// 映画のリストを取得
export type TMovie = {
    id: number; // 映画ID
    title: string; // 映画タイトル
    thumbnail: string; // 映画サムネイル
    start: string; // 公開開始日
    on_air: boolean; // 公開中(1:true)/公開予定(0:false)か
    age_restrictions: number; // 年齢制限
    types: string[]; // 上映種別
    movieInfo: TMovieInfo;
};

// ===============================================================
// GET movies/{映画ID}
// ===============================================================
// 映画の詳細と一週間分のスケジュールを取得
export type TMovieInfo = {
    data: string; // 映画のデータ(監督、出演など)
    introduction: string; // イントロダクション
    time: number; // 映画の長さ(分)
    images: string[]; // スクリーンショット
    types: string[]; // 全上映種別
    manages: TManage[]; // 公開スケジュール
};

// 公開スケジュール
export type TManage = {
    id: number; // 上映管理ID
    day: string; // 上映日
    start: string; // 上映開始時間
    end: string; // 上映終了時間
    screening_time: number; // 上映時間(分)
    theater_id: number; // シアター番号
    all_seats: number; // 全座席数
    reserved_seats: number; // 既予約座席数
    type: string[]; // 上映種別
};

const user_id_pw='select * from user_id_pw';
const insert_user_bio_info = 'INSERT INTO USER_BIO_INFO set?';
const insert_user_info = 'INSERT INTO USER_INFO set?';

const update_user_bio_info = 'update USER_BIO_INFO set ? where id=?';
export {
    user_id_pw ,
    insert_user_info,
    insert_user_bio_info ,
    update_user_bio_info,
}
//1. DB에 select로 모든 id pw값 가져오기
//2. id pw 값으로 api에서 member_seq, member_phone_num, member_email, token값 받아오기
//2-1. api에서 받아온 값 db user_info에 저장
//3. 토큰 값으로 api에서 
//member_diastolic_blood_pressure, 
//member_systolic_blood_pressure, 
//member_bpm, 
//member_stress_level, 
//member_stress_value값 받아오기
//3-1. api에서 받아온값 db user_bio_info에 저장
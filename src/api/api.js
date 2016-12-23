export const API_ROOT = 'http://192.168.16.178:8099'

// * : must
// @ : at least one
// | : optional

// 2.1 -> 2.19

// 2.2 mobile*
export const API_PATH_USER_GET_VERIFY_CODE = '/czb-server/czb/user/sendMsg'

// 2.3 mobile*|passWord*|verify_code*|register_from:'web'*
export const API_PATH_USER_REGIST = '/czb-server/czb/user/userRegist'

// 2.4 mobile*|passWord*|verify_code*
export const API_PATH_USER_MODIFY_PASSWORD = '/czb-server/czb/user/passWordModify'

// 2.5 mobile*|verify_code*
export const API_PATH_USER_CHK_VERIFY_CODE = '/czb-server/czb/user/msgCheck'

// 2.6 user_id*|mobile*
export const API_PATH_USER_CHK_MOBILE = '/czb-server/czb/user/mobileCheck'

// 2.7 user_id*|mobile*|verify_code*
export const API_PATH_USER_MODIFY_PHONE = '/czb-server/czb/user/mobileModify'

// 2.8 user_id*|gender@|region@|email@|nickname@
export const API_PATH_USER_MODIFY_INFO = '/czb-server/czb/user/userInfoModify'

// START TODO:....
// 2.9 user_id*|course_id*|status*
export const API_PATH_USER_ADD_COLLECT_COURSE = '/czb-server/czb/user/collectCourse'

// 2.10 user_id*|program_id*|status*
export const API_PATH_USER_ADD_COLLECT_PROGRAM = '/czb-server/czb/user/programCollect'

// 2.11 id*
export const API_PATH_USER_GET_FAVORITES_COURSE = '/czb-server/czb/user/favoritesCourse'

// 2.12 id*
export const API_PATH_USER_GET_FAVORITES_PROGRAM = '/czb-server/czb/user/favoritesProgram'
// END TODO:....

// 2.13 user_id*
export const API_PATH_USER_GET_CHILD = '/czb-server/czb/user/userChild'

// 2.14 user_id*|baby_name*|baby_gender*|baby_birth*
export const API_PATH_USER_ADD_CHILD = '/czb-server/czb/user/saveChild'

// 2.15 id*|baby_name@|baby_gender@|baby_birth@
export const API_PATH_USER_MODIFY_CHILD = '/czb-server/czb/user/editChild'

// 2.15 id*
export const API_PATH_USER_REMOVE_CHILD = '/czb-server/czb/user/deleteChild'

// 2.16 uid*|avatar*|type*
export const API_PATH_USER_UPLOAD_AVATAR = '/czb-server/czb/user/uploadAvatar'

// 2.19 username*|password*|from='web'*|type='1'
export const API_PATH_USER_LOGIN = '/czb-server/czb/user/login'

/* ACCOUNT SECTION */
// 2.40 user_id*|courseId*
export const API_PATH_ACCOUNT_COURSE_REMAIN_TIME = '/czb-server/czb/user/queryLeftHour'

// 2.43 user_id*
export const API_PATH_ACCOUNT_CARD_LIST = '/czb-server/czb/api/queryCardInfo'

// 2.45 card_no*|card_pwd*|user_id*
export const API_PATH_ACCOUNT_CARD_ACTIVE = '/czb-server/czb/api/activateCard'

// 2.48 use_id*
export const API_PATH_ACCOUNT_LEFT_COIN = '/czb-server/czb/api/queryLeftCoin'

/* PRODUCT SECTION */
export const API_PATH_COURSE_LIST = 'http://mp.yuningwang.com/tczmall/itemList/mobile/0/1/10/1'

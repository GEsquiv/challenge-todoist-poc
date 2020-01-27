require('dotenv').config();
// export const TASK_NAME = `TaskName${}`
export const URL = `${process.env.URL}`
export const EMAIL = `${process.env.EMAIL_ADDRESS}`
export const PASSWORD = `${process.env.PASSWORD}`
export const INCORRECT_EMAIL = 'esquivelgrisell@gmail.com'
export const INCORRECT_PASSWORD = 'Star_STEY1'
export const TASK_NAME = `task_${Date.now()}`

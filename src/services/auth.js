// Простий локальний "акаунт" для курсової (без сервера)
// users: [{name,email,password}]  currentUser: {name,email}

const USERS_KEY = 'users'
const CURRENT_KEY = 'currentUser'

export function getUsers(){
  try{ return JSON.parse(localStorage.getItem(USERS_KEY) || '[]') }catch(e){ return [] }
}
export function saveUsers(users){
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}
export function getCurrentUser(){
  try{ return JSON.parse(localStorage.getItem(CURRENT_KEY) || 'null') }catch(e){ return null }
}
export function setCurrentUser(user){
  localStorage.setItem(CURRENT_KEY, JSON.stringify(user))
}
export function logout(){
  localStorage.removeItem(CURRENT_KEY)
}

export function register({name,email,password}){
  const users = getUsers()
  const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase())
  if(exists) return { ok:false, message:'Користувач з таким email вже існує' }
  users.push({ name, email, password })
  saveUsers(users)
  setCurrentUser({ name, email })
  return { ok:true }
}

export function login({email,password}){
  const users = getUsers()
  const u = users.find(x => x.email.toLowerCase() === email.toLowerCase() && x.password === password)
  if(!u) return { ok:false, message:'Невірний email або пароль' }
  setCurrentUser({ name: u.name, email: u.email })
  return { ok:true }
}

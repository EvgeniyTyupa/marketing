export const required = (value) =>{
    if(value) return undefined;
    
    return 'Обязательное поле!';
}
export const isEmail = (value) => {
    let rep = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(rep.test(value)){
        return undefined;
    }
    return 'Введен неправильный email!';   
}
export const phoneValidator = (value) => {
    if(value.length === 10 || value.length === 13) return undefined;
    return 'Неправильный номер телефона!';
}
/**
 * 
 * @param {String} name 
 * @param {*} value 
 * @param {Number} size 
 */
export default function setStorage (name, value, size) {
    // 获取之前的值，如果没有就赋值为数组
    let storage = JSON.parse(localStorage.getItem(name)) || [];
    // 把新加入的值插到最前面
    storage.unshift(value);
    // 去重
    storage = Array.from(new Set(storage));
    // 数量限制
    if (storage.length > size) {
        storage.splice(size);
    }
    localStorage.setItem(name, JSON.stringify(storage));
}

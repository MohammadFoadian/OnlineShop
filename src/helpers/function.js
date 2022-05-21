const shorten = (title) => {  // 21
    const splitedTitle = title.split(" "); // 21
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}` // 22
    return newTitle // 23
}

// 41 full option
const isInCart = (state , id) => { 
    const result = !!state.selectedItems.find(item => item.id === id);
    return result
}

// 43 full
const quantityCount = (state , id) => { 
    const index = state.selectedItems.findIndex(item => item.id === id);
    if(index === -1) { 
        return false
    } else { 
        return state.selectedItems[index].quantity
    }
}

export {shorten , isInCart , quantityCount}
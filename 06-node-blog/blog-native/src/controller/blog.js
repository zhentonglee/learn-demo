const getList = (author, keyword) => {
    //先返回假数据
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: '1566622829393',
            author: 'tom'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: '1566622897873',
            author: 'jerry'
        }
    ]
}

const getDetail = (id) => {
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: '1566622829393',
        author: 'tom'
    }
}

module.exports = {
    getList,
    getDetail
}
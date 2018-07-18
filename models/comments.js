const marked = require('marked')
const Comment = require('../lib/mongo').Comment

// 将 comment 的content从markdown转换成html
Comment.plugin('contentToHtml', {
    afterFind: Comments => {
        return comments.map(comment => {
            comment.content = marked(comment.content)
            return comment
        })
    }
})

module.exports = {
    // 创建一个留言
    create: comment => {
        return Comment.create(comment).exec()
    },

    // 通过留言id获取一个留言
    getCommentById: commentId => {
        return Comment.findOne({ _id: commentId }).exec()
    },

    // 通过留言 id 删除一个留言
    delCommentById: commentId => {
        return Comment.deleteOne({ _id: commentId }).exec()
    }
}
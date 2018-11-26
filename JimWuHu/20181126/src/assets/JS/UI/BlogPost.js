export default {
    props: {
        postTitle: String,
        postLikes: Number,
        postIsPublished: Boolean,
        postCommentIds: Array,
        postAuthor: Object
    },
    template: `
        <div>        
            <h3>{{ postTitle }}</h3>
            <ul><li>{{ postLikes }} Like</li></ul>
            <div v-if="postIsPublished">It's published</div>
            <div v-else>It's not published</div>
            <div>About Auther: name: {{ postAuthor.name }} </div>
        </div>
    `
}
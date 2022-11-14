const home = {
    render: async () => {
        let view = `
            <div class="home">
            <div class="header">San Router 1.0.1</div>
                <div class="contents">
                    <p>👋 Hello there!🎊</p>
                    <p>This is <span>San Router 1.0.1 Demo</span> Homepage</p>
                </div>
            </div>
        `
        return view;
    },
    after_render: async () => {
        console.log('Back to Homepage');
    }
}

export default home;
const navbar = {
    render: async () => {
        let view = `
            <div class="nav-wrapper">
                <a class="nav-item" href="san-router-demo/#/">
                    <span>Home</span>
                </a>
                <a class="nav-item" href="san-router-demo/#/about">
                    <span>About</span>
                </a>
                <a class="nav-item" href="san-router-demo/#/projects">
                    <span>Projects</span>
                </a>
            </div>
        `
        return view;
    },
    after_render: async () => {
        // let navbar = document.getElementById('navbar');
    }
}

export default navbar;
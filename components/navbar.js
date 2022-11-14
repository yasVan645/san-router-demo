const navbar = {
    render: async () => {
        let view = `
            <div class="nav-wrapper">
                <a class="nav-item" href="/#/">
                    <span>Home</span>
                </a>
                <a class="nav-item" href="/#/about">
                    <span>About</span>
                </a>
                <a class="nav-item" href="/#/projects">
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
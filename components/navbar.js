const navbar = {
    render: async () => {
        let view = `
            <div class="nav-wrapper">
                <a class="nav-item home-router">
                    <span>Home</span>
                </a>
                <a class="nav-item about-router">
                    <span>About</span>
                </a>
                <a class="nav-item projects-router">
                    <span>Projects</span>
                </a>
            </div>
        `
        return view;
    },
    after_render: async () => {
        document.querySelector('.home-router').addEventListener('click', () =>{
            location.hash = '/';
        })
        document.querySelector('.about-router').addEventListener('click', () =>{
            location.hash = '/about';
        })
        document.querySelector('.projects-router').addEventListener('click', () =>{
            location.hash = '/projects';
        })
        // let navbar = document.getElementById('navbar');
    }
}

export default navbar;
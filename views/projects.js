const projects = {
    render: async () => {
        let view = `
        <div class="projects">
        <div class="header">Projects</div>
            <div class="contents">
                <p><b>🍵 List of projects.</b></p>
                <li>Open Skyweather </li>
                <li>SPA Router</li>
                <li>Discord bot api</li>
                <li>Etc</li>
            </div>
        </div>
        `
        return view;
    },
    after_render: async () => {
        //your codes for projects business logics
        console.log('Switched to projects page')
    }
}

export default projects;
const about = {
    render: async () => {
        let view = `
            <div class="about">
                <div class="header">About</div>
                <div class="contents">
                    <p>🍵 Tricky Jar.</p>
                    <p>An 85-year-old man goes to see his doctor for his regular physical exam. The doctor says that the man needs to provide a sperm sample and gives him a jar saying, “Take this jar home with you and come back tomorrow with a sperm sample.”
                    <br>
                    <br>
                    The next day the old man goes back to the doctors and gives him the jar, which is as clean and empty as when the doctor gave it to him.
                    <br>
                    <br>
                    So the doctor asks what happened and why there is no sperm sample in the jar. The old man says, “Well, doc, it’s like this… first I tried with my right hand, but nothing. Then I tried with my left hand, but still nothing. Then I asked my wife for help. She tried with her right hand – nothing; then with her left, still nothing. She tried with her mouth, first with the teeth in, then with her teeth out, still nothing. We even called up Maisie, the lady next door and she tried too, first with both hands, then an armpit, and she even tried squeezing it between her knees, but still nothing.”
                    <br>
                    <br>
                    The doctor is really shocked by all this and asks incredulously, “You asked your neighbor???”
                    <br>
                    <br>
                    The old man replies, “Yep, not one of us could get the jar open.”</p>
                </div>
            </div>
        `
        return view;
    },
    after_render: async () => {
        console.log('Switched to about page')
    }
}

export default about;
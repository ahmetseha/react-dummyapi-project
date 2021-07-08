import React from "react";
import styles from "./About.module.scss";
import profile from "../../assets/image/ahmetseha.jpg";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__image}>
          <img src={profile} alt="profil fotoğrafı" />
        </div>
        <div className={styles.container__about}>
          <p>
            This is truly an almighty mountain. There he comes. Trees live in
            your fan brush, but you have to scare them out. Isn't it great to do
            something you can't fail at? Even trees need a friend. We all need
            friends. Only think about one thing at a time. Don't get greedy.
            We'll lay all these little funky little things in there. Trees get
            lonely too, so we'll give him a little friend. We're trying to teach
            you a technique here and how to use it. We have all at one time or
            another mixed some mud. Imagination is the key to painting. Nice
            little clouds playing around in the sky. The little tiny Tim easels
            will let you down. Now we can begin working on lots of happy little
            things. We need a shadow side and a highlight side. Maybe there's a
            happy little Evergreen that lives here. If you didn't have baby
            clouds, you wouldn't have big clouds. A big strong tree needs big
            strong roots. Almost everything is going to happen for you
            automatically - you don't have to spend any time working or
            worrying. You're meant to have fun in life. Didn't you know you had
            that much power? You can move mountains. You can do anything. I'm
            gonna add just a tiny little amount of Prussian Blue. Be so very
            light. Be a gentle whisper. We don't have to be concerned about it.
            We just have to let it fall where it will. Just let your mind wander
            and enjoy. This should make you happy. Little short strokes. If
            we're going to have animals around we all have to be concerned about
            them and take care of them. Put your feelings into it, your heart,
            it's your world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

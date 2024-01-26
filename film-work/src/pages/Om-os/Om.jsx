import React from "react";
import { Footer } from "../../components/Footer/footer";
import Star from "../../assets/Img/Star.png";
import "./Om.scss";
export const OmOs = () => {
  return (
    <>
      <section>
        <article className="mainOm">
          <div>
            <h2>Om os</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              perspiciatis asperiores tenetur quasi sit quis? Aliquid quisquam
              ullam ipsum praesentium expedita ab saepe nostrum accusamus qui!
              Repudiandae ea dolorem laboriosam!Lorem Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Magni unde delectus, blanditiis vero
              similique accusamus debitis reiciendis animi cum magnam, dicta
              aliquid nulla! Totam quas, beatae deserunt enim quidem nulla!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              fugiat rem natus quo,
              <br /> sequi sunt enim! Animi sapiente similique, delectus quidem
              possimus odio perferendis aliquid officia sit non quod molestiae?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ipsa saepe fugiat est dolorum dignissimos magni fuga, illum
              aspernatur facilis vel inventore voluptates nesciunt qui, aliquam
              vero libero. Aperiam, dolorem! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Molestiae ullam dicta tempora
              inventore a doloribus voluptate accusamus quas ab illo, id quod
              ipsum beatae iste, similique velit. Iusto, odit minima!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio perferendis cumque hic quaerat sint blanditiis
              cupiditate ea dicta, aliquid odit? Quia dolorem et velit
              recusandae aliquid maiores quo quidem eveniet? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quam repellendus in
              excepturi. Saepe nobis nulla cumque sit repellendus reprehenderit
              nihil accusamus libero, vel qui provident quas voluptatem deserunt
              explicabo dignissimos.
            </p>
          </div>
          <img className="Star" src={Star} alt="" />
        </article>
      </section>
      <Footer></Footer>;
    </>
  );
};

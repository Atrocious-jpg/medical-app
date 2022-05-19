import styles from "../styles/Specialities.module.css";
import "@fontsource/mulish";
import ImageHeader from "./images";

export default function Speciality(props) {
  return (
    <>
      <div id={styles.container}>
        <h2>{props.title}</h2>
        <ImageHeader
          title={props.title}
          body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus tempus lacinia. Aenean ac lectus facilisis purus semper porttitor. Vivamus vitae purus efficitur, condimentum ipsum vel, imperdiet risus. Fusce ultricies erat at magna condimentum interdum.`}
        />
        <p>
          Dr Vadgama is experienced in treating all shoulder injuries and
          problems such as rotator cuff tears, sub-acromial bursitis,
          impingement, calcific tendonitis, biceps problems, fractures, unstable
          shoulders, acromioclavicular joint injuries, frozen shoulder, and
          shoulder arthritis.
        </p>
        <h6>Before surgery is considered:</h6>
        <p>
          During the first consultation Dr Vadgama will take time to find out
          more about your health and the nature of your shoulder problem. He
          will examine you to identify the origin of pain, assess the shoulder
          movement and stability, and he will measure the power in the various
          muscles attaching to the shoulder. It is advisable to wear a vest
          underneath your clothes to allow easy access to your shoulder without
          undressing completely.
        </p>
        <p>
          Depending on the suspected shoulder condition, he may perform an
          ultrasound scan in his rooms to assess the rotator cuff, sub-acromial
          bursa, biceps tendon and acromio-clavicular joint. When a cortisone
          injection is required he will use ultrasound-guidance to ensure the
          injection is performed accurately. You may be sent for X-rays as well
          to assess the shoulder joint and bony architecture, however, this is
          not always required. In certain scenarios a MRI scan or CT-scan may
          also be required.
        </p>
        <p>
          Dr Vadgama will discuss your diagnosis and management options with
          you. Many shoulder problems can initially be treated by conservative
          means which may include medication, cortisone injections and/or
          physiotherapy. Please have a look at the list of shoulder problems in
          the Patient Info section. If surgery is indicated, he will explain the
          proposed procedure, alternative procedures, as well as the risks
          involved. Please feel free to ask questions during this process.
        </p>
        <h6>Open or arthoscopic (“key-hole”) surgery?</h6>
        <p>
          Dr Vadgama is experienced in both arthroscopic and open surgical
          procedures. Most of the soft tissue operations performed on the
          shoulder can be performed arthroscopically through small skin
          incisions. Besides the cosmetic advantage of having smaller scars,
          this also causes less damage to the overlying deltoid muscle and
          therefore less deltoid weakness afterwards. There is also a lower
          infection risk with arthroscopic surgery.
        </p>
        <p>
          Certain operations such as fracture fixation surgery, Latarjet
          procedure and shoulder replacements require wider surgical exposure
          and are therefore performed as open procedures. Care is taken to
          minimize damage to surrounding structures to reduce bleeding and lower
          the infection risk. When possible, a dissolvable suture is used with
          skin suture strips to help form a thin scar.
        </p>
        <h6>The morning of surgery</h6>
        <p>
          You will be informed about the time of your surgery and admission
          time. You will need to present yourself to hospital about 2 hours
          before surgery as the admission process can be quite tedious. There is
          a pre-admission form at the Eldoret Hospital or facility of your
          choice where you can complete most of the paperwork the day before
          surgery to speed up the admission process. Please be starved (nothing
          to eat or drink) for at least 6 hours before surgery.
        </p>
        <h6>After surgery</h6>
        <p>
          Depending on the surgery performed and the time of surgery, you may be
          allowed to go home on the same day or the following morning. If pain
          is expected to be severe after surgery it is advisable to stay
          overnight to optimize pain management. Other factors influencing the
          length of stay will be the use of surgical drains and intravenous
          antibiotics. You will be issued with a sling and instructed about its
          use. Please have a look at the post-operative rehabilitation
          information sheets in the “Patient Education” section. Dr Vadgama will
          refer you to a physiotherapist when required. The first follow-up
          visit is normally at 2 weeks after surgery to assess your surgical
          scar(s).
        </p>
        <h6>
          <span className="snanning">Recovery post surgery</span>
        </h6>
        <p>
          After surgery, you’ll stay overnight in hospital before being
          discharged. Nurses will monitor you and provide pain medication.
          You’ll need someone to drive you home and stay with you for at least
          the first night.
        </p>
        <p>
          Recovering from arthroscopy is often faster than recovering from open
          surgery. However, it may still take weeks to months for your shoulder
          joint to fully recover.
        </p>
        <p></p>
        <style jsx>{`
          p {
            font-style: normal;
            margin-top: 0px;
            margin-bottom: 30px;
            font-family: Mulish, "open sans", HelveticaNeue, "Helvetica Neue",
              Helvetica-Neue, Helvetica, Arial, sans-serif;
            color: #151a1e;
            font-size: 23px;
            line-height: 30px;
          }
          h6 {
            font-size: 35px;
            font-style: normal;
            font-weight: 700;
            margin: 0.85em 0px;
            padding: 0px;
            border-color: #151a1e;
            font-family: Pacaembu, sans-serif;
            font-stretch: inherit;
            line-height: 52px;
            vertical-align: baseline;
            caret-color: #666666;
            color: #666666;
          }
          h2 {
            font-size: 3rem;
            font-weight: 900;
            text-align: center;
            margin: 6% auto;
          }
        `}</style>
      </div>
    </>
  );
}

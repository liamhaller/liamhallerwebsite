<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo
  title="Liam Haller – Resume"
  description="Researcher, software engineer, and statistician. Mathematical Modeling of Migration Dynamics and Political Risk."
/>

<section class="layout-md py-12">
  <h2 class="heading2">Education</h2>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Northwestern University</h3>
      <div class="text-neutral-500 mb-0.5">2016 — 2020</div>
    </div>
    <p class="byline">B.A in Mathematics</p>
  </div>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Kellogg School of Management</h3>
      <div class="text-neutral-500 mb-0.5">2018 — 2020</div>
    </div>
    <p class="byline">Certificate in Financial Economics</p>
  </div>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Humboldt University of Berlin</h3>
      <div class="text-neutral-500 mb-0.5">2024 – Present</div>
    </div>
    <p class="byline">MSc Statistics</p>
  </div>



  <h4 class="font-medium mt-4 mb-1">Graduate-level coursework:</h4>
  <ul>
    <li>Advanced Empirical
      Economics</li>
    <li>Financial Econometrics</li>
    <li>Multivariate Statistical Analysis</li>
    <li>Principles of Finance (KELLG_FE 310-0)</li>
    <li>Investmeents (KELLG_FE 312-0lk)</li>
    <li>Derivatives (KELLG_FE 3014-0)</li>
    <li> Derivatives Markets (FINC-465-0)</li>
    <li>Advanced Econometrics I (ECON 381-1)</li>
    <li>Advanced Econometrics II (ECON 381-2)</li>
  </ul>

  <h4 class="font-medium mt-4 mb-1">Undergraduate technical coursework:</h4>
  <ul>
    <li>Real Analysis (Math 320-1)</li>
    <li>Probability Theory (Stat 310)</li>
    <li>Stochastic Processes (Math 310-2)</li>
    <li>Continuous Time Markov Chains (Math 310-3)</li>
    <li>Research in Combinatorics (Math 399)</li>
    <li>Regression Analysis (Stat 350)</li>
  </ul>
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Professional Experience</h2>

  <Workplace
    title="Researcher"
    company="DeZIM Institute"
    url="https://www.dezim-institut.de/"
    dates="September 2021 – Current"
    location="Berlin, Germany"
  >
    <li>
      Modal is a high-performance, low-latency serverless function platform. I
      made Modal's serverless container runtime from scratch, in Rust.
    </li>
    <li>
      Scaled the platform from 50 CPUs / 2 GPUs to 100,000 CPUs / 5,000 GPUs.
    </li>
    <li>
      Engineered FUSE file systems, a global sub-millisecond cache over hundreds
      of terabytes in tiered storage, backpressure for distributed queues,
      fault-tolerant TLS relays, container sandboxing, an internal HTTP/3
      service transport, etc.
    </li>
    <li>
      Made the <a class="link" href="https://modal.com">modal.com</a> website. Created
      our design system and frontend, including user dashboards, authentication,
      a unified documentation site, 2D + 3D graphics, and web-based internal tools.
      Mentored coworkers in web development.
    </li>
    <li>Wrote most of our core development scripts. Made CI fast.</li>
    <li>
      Investigated systems issues, like reducing end-to-end server latency by
      3x, fixing all manner of bugs, and disclosing security vulnerabilities in
      dependencies.
    </li>
    <li>
      Introduced Rust and Svelte to the company. I rewrote at least 4 systems in
      Rust. All of them remained in use, since people like working on them, and
      they are more robust than the systems they replaced (i.e., boring and
      reliable, low p99 latency, no production issues).
    </li>
  </Workplace>

  <Workplace
    title="Fulbright Research Fellow"
    company="U.S. State Department"
    url="https://us.fulbrightonline.org/"
    dates="September 2022 – July 2022"
    location="Berlin, Germany"
  >
    <li>
      Designed and conducted independent research on the determinants of citizenship acquisition 
      for refugees and developed a theoretical model for decision-making processes

    </li>
    <li>
      Interviewed 30 Syrian and Iraqi refugees in Arabic/German
      to assess how lived experiences affect citizenship aspirations
    </li>
    <li>Accepted to present research at the annual International Migration Research Network (IMISCOE)
       conference and to collaborate on a Special Issue for the Migration, Citizenship and 
       Political Participation standing committee</li>
    <li>
      Published two journal articles from this research:
      <ul> <li> A not-so ‘natural’ decision: impact of bureaucratic trajectories on forced migrants’ 
        intention and ability to naturalise</li></ul>
       <ul> <li> Escaping Uncertainty: Overlapping Methods of Knowledge Production and Exchange in
        the Naturalization Journey</li> </ul>
    </li>
  </Workplace>

  <Workplace
    title="Software Engineer"
    company="McMaster-Carr"
    url="https://convex.dev/"
    dates="September 2020 – September 2021"
    location="Chicago, IL"
  >
    <li>
      Programmed credit card processing flow to automate ~8000 monthly declines, 
      improving response times and saving 120 hours of manual labor each week
    </li>
    <li>
      Developed and updated back-end infrastructure, replacing outdated order scheduling software to enable 
      the processing of 70,000 daily orders and allow for future self-service features for customers
    </li>
  </Workplace>

  <Workplace
    title="Campus CEO"
    company="BrewBike "
    url="https://brewbikecoffee.com/"
    dates="September 2017 – June 2020"
    location="Chicago, IL"
  >
    <li>
      Mananged a group of student-run coffee shops with 40 undergraduate employees and $120,000+ in annual revenue
    </li>

  </Workplace>

</section>

<!-- <section class="layout-md py-12">
  <h2 class="heading2">Awards and Honors</h2>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Computer Science:</h3>
    <ul>
      <li>
        <b>International Olympiad in Informatics (IOI):</b> Gold Medalist (2018,
        2019), 7<sup>th</sup> place globally
      </li>
      <li>
        <b>Google Hash Code:</b> World Finalist (2020, 2021, 2022), 6<sup
          >th</sup
        > place team out of over 100,000 students and professionals
      </li>
      <li>
        <b>Google Code Jam:</b> Round 3 Finalist (2020), placed 34<sup>th</sup>
        globally
      </li>
      <li><b>Facebook Hacker Cup:</b> Round 3 Finalist (2020)</li>
      <li><b>PicoCTF:</b> Winner (2018), ranked 6th</li>
    </ul>
  </div>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Mathematics:</h3>
    <ul>
      <li>
        <b>Mathematical Olympiad Program (MOP):</b> Participant (2017), IMO team
        selection group (2017, 2018)
      </li>
      <li>
        <b>USA Math Olympiad (USAMO):</b> Honorable Mention (2017), top 24 in nation
      </li>
    </ul>
  </div>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Physics:</h3>
    <ul>
      <li><b>U.S. Physics Team:</b> Invitee (2017, 2018, 2019)</li>
      <li>
        <b>USA Physics Olympiad (USAPhO):</b> Gold Medalist (2017, 2018, 2019)
      </li>
    </ul>
  </div>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Music Performance:</h3>
    <ul>
      <li>
        <b>National YoungArts Foundation:</b> Winner in Classical Music (2018, 2019)
      </li>
      <li>
        <b>JDR Viola Competition:</b> Grand prize winner, performed with a professional
        orchestra (2019)
      </li>
      <li>
        <b>Texas All-State Symphony Orchestra:</b> Principal Violist (2017), Co-Principal
        (2016, 2018)
      </li>
    </ul>
  </div>
</section> -->

<style lang="postcss">
  b {
    @apply font-medium;
  }

  ul {
    @apply list-disc pl-7 marker:text-neutral-400;
  }

  .byline {
    @apply font-serif italic;
  }
</style>

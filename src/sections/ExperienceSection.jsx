import dialpadImage from "/assets/logos/dialpad.jpeg";
import blueprintImage from "/assets/logos/blueprint.jpeg";
import ubcImage from "/assets/logos/ubc.jpeg";
import diastolicImage from "/assets/logos/diarobo.jpeg";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Dialpad",
      date: "May 2026 – Present",
      logo: dialpadImage,
      link: "https://www.linkedin.com/company/dialpad",
      bullets: [
        "Returned to Dialpad full-time as a Software Engineer",
        "Building production software for AI-powered business communications",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Dialpad",
      date: "Jan – Sep 2025",
      logo: dialpadImage,
      link: "https://www.linkedin.com/company/dialpad",
      bullets: [
        "Built real-time KPI dashboards to monitor contact center performance",
        "Implemented tracking tools to bring Agentic AI projects to end users",
        "Used Datadog to identify API bottlenecks, then improved performance through strategic caching and data-fetching optimizations",
      ],
    },
    {
      role: "Advisor",
      company: "SFU Blueprint",
      date: "May 2026 – Present",
      logo: blueprintImage,
      link: "https://www.linkedin.com/company/sfu-blueprint",
      bullets: [
        "Advising the team on nonprofit partnerships, project delivery, and developer mentorship",
      ],
    },
    {
      role: "VP Operations and Senior Developer",
      company: "SFU Blueprint",
      date: "Jul 2023 – May 2026",
      logo: blueprintImage,
      link: "https://www.linkedin.com/company/sfu-blueprint",
      bullets: [
        {
          type: "html",
          content:
            "Built a volunteer management system for <a href='https://ourcommunitybikes.org' target='_blank' rel='noopener noreferrer' class='text-indigo-600 underline'>Our Community Bikes</a>",
        },
        {
          type: "html",
          content:
            "Trailblazed working relationships with provincially funded nonprofit organizations like <a href='https://www.mosaicbc.org/' target='_blank' rel='noopener noreferrer' class='text-indigo-600 underline'>Mosaic</a>, to help them develop an AI chatbot",
        },

        "Mentored new undergrad developers on software development, enhancing their knowledge and contribution for social good",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "UBC Network & Infrastructure",
      date: "Jan – Aug 2024",
      logo: ubcImage,
      link: "https://www.linkedin.com/school/universityofbc",
      bullets: [
        "Developed a network configuration app using AngularJS, enabling network engineers to efficiently manage devices over 1000+ physical sites",
        "Created an internal tool to simplify switch port configuration for network engineers",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Diastolic Robotics",
      date: "January 2023 – May 2023",
      logo: diastolicImage,
      link: "https://www.linkedin.com/company/diastolic-robotics-inc",
      bullets: [
        "Developed a sleep apnea assessment app for iOS and Android",
        "Engineered Bluetooth Low Energy (BLE) communication between Arduino boards and smartphones for wearable medtech devices.",
        "Built automation scripts and streamlined firmware testing workflows",
      ],
    },
  ];

  return (
    <section className="">
      {/* <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2> */}
      <div className="space-y-12">
        {experiences.map((exp, idx) => {
          const hasCompanyProgression =
            experiences[idx + 1]?.company === exp.company;

          return (
            <div key={idx} className="flex items-start gap-6">
              {/* Logo */}
              <div className="relative flex w-16 flex-shrink-0 justify-center self-stretch">
                {hasCompanyProgression && (
                  <div className="absolute left-1/2 top-[4.75rem] -bottom-11 border-l-2 border-dotted border-indigo-300" />
                )}
                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-md bg-gray-100 p-2">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* Experience content */}
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-xl font-semibold">
                  {exp.role} ·{" "}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    {exp.company}
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mb-2">{exp.date}</p>
                <ul className="list-disc ml-5 text-gray-700">
                  {exp.bullets.map((item, i) =>
                    typeof item === "string" ? (
                      <li key={i}>{item}</li>
                    ) : (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    ),
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

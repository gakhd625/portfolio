import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

interface JobExperience {
  title: string;
  duration: string;
  company: string;
  responsibilities: string[];
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl: string;
  credentialId?: string;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const jobExperiences: JobExperience[] = [
    {
      title: "Backend Developer Intern",
      duration: "June 2025 - Present",
      company: "Chronostep Inc.",
      responsibilities: [
        "Utilizing Laravel and Python flask frameworks to develop robust and scalable backend services.",
        "Building modern, responsive UIs using Next.js and React for an enhanced user experience",
        "Collaborating with senior developers and cross-functional teams to deliver high-quality solutions.",
        "Conducting code reviews, debugging, and optimizing applications for performance and security.",
      ],
    },
    {
      title: "CODERed Hackathon- 2nd Place",
      duration: "May 2025",
      company: "Protektalk",
      responsibilities: [
        "Developed an AI-powered guardian system designed to protect children from online grooming, cyberbullying, and emotional abuse in games",
        "Tools: HTML, Bootstrap, CSS, JavaScript, Python, Django, Gemini",
      ],
    },
    {
      title: "Google Developer Group Cebu - Technical Volunteer",
      duration: "May 2025- Present",
      company: "Google Developer Group Cebu",
      responsibilities: [
        "Assisted in organizing and facilitating technical workshops and events",
        "Provided technical support and guidance to community members",
        "Contributed to the growth of the local developer community",
      ],
    },
  ];

  const certifications: Certification[] = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "January 2025",
      image: "/images/aws.png",
      verifyUrl:
        "https://www.credly.com/badges/25058310-b13f-4d98-9fb3-587c4689c5f5/public_url",
      credentialId: "AWS-CCP-2025",
    },
    {
      title:
        "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      issuer: "Oracle",
      date: "July 2024",
      image: "/images/oracle.png",
      verifyUrl:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6514B266B0A3DD38758062EDAB0DAE022EB7BA1EF298B825FB220C2B690B0B2B",
      credentialId: "OCI-GAI-2024",
    },
    {
      title: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle",
      date: "May 2025",
      image: "/images/oraclevector.png",
      verifyUrl:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8427AE99E820F666BB156BD23A32B34212225495D7227E69B0EDDE6CC1934587",
      credentialId: "OCI-AIVS-2025",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          Experience & Certifications
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Experience Section - Left Side */}
          <motion.div variants={itemVariants} className="relative">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center lg:text-left">
              Professional Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-base-content/20"></div>

              {jobExperiences.map((job, index) => (
                <motion.div
                  key={job.title}
                  variants={itemVariants}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-0 w-12 h-12 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="ml-16">
                    {/* Job Title */}
                    <h4 className="text-xl font-bold text-primary mb-3 uppercase tracking-wide">
                      {job.title}
                    </h4>

                    {/* Duration */}
                    <div className="inline-block bg-base-200 text-base-content/80 px-4 py-2 rounded-lg mb-3 font-medium text-sm">
                      {job.duration}
                    </div>

                    {/* Company Name */}
                    <p className="text-lg text-base-content/70 italic mb-4">
                      {job.company}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-base-content/40 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-base-content/80 leading-relaxed text-sm">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section - Right Side */}
          <motion.div variants={itemVariants} className="relative">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center lg:text-left">
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="relative p-4 bg-base-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-base-content/10">
                    {/* Header with Icon and Title */}
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-10 h-10 flex-shrink-0">
                        <img
                          src={cert.image}
                          alt={cert.issuer}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-bold text-primary mb-1 line-clamp-2">
                          {cert.title}
                        </h4>
                        <p className="text-base-content/70 text-xs">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Date and Credential ID */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs text-base-content/60 font-medium">
                        {cert.date}
                      </span>
                      {cert.credentialId && (
                        <span className="px-2 py-1 bg-base-100 rounded-full text-xs text-base-content/70 border border-base-content/20">
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>

                    {/* Verify Link */}
                    <div className="pt-2 border-t border-base-content/10">
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-xs text-primary hover:text-primary/80 transition-colors duration-200"
                      >
                        <span>Verify Certificate</span>
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Background decorative elements */}
        <motion.div
          className="absolute top-1/4 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Experience;

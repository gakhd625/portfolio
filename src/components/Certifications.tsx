import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl: string;
  credentialId?: string;
}

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
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8427AE99E820F666BB156BD23A32B34212225495D7227E69B0EDDE6CC1934587&fbclid=IwY2xjawKSe41leHRuA2FlbQIxMQABHnwtMVFI3jOrVfYqw3R9LO746NgyvSbUtiqU-6eW8atWvmaFwItJX0N8zWK9_aem_LIkawFXKsFUlvMffk0mYlg",
    credentialId: "OCI-GAI-2024",
  },
];

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-12"
        >
          Certifications
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-4 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img
                      src={cert.image}
                      alt={cert.issuer}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </motion.a>
                </div>

                <h3 className="text-lg font-bold mb-2 gradient-text line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-base-content/70 mb-2">
                  Issued by {cert.issuer}
                </p>
                <p className="text-sm text-base-content/50 mb-4">
                  {cert.date}
                  {cert.credentialId && (
                    <span className="ml-2 px-2 py-1 bg-base-200 rounded-full text-xs">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </p>
                <motion.a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>Verify Certificate</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-1/4 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"
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

export default Certifications;

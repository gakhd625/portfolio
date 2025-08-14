import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog post cards go here */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-base-100 p-6 rounded-lg shadow-md"
          >
            <img
              src="/images/blog1a.webp"
              alt="AWS Serverless Blog Card"
              className="w-full h-50 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Building a Serverless Image Processing Pipeline with AWS Lambda, S3, and API Gateway</h3>
            <p className="text-base-content/80 mb-4">
                Explore how to build a serverless image processing pipeline using AWS Lambda, Amazon S3, and API Gateway. This blog walks you through the technical details, provides relevant code snippets, and includes architectural diagrams for clarity.
              </p>
            <div className="flex space-x-4">
              <a href="https://dev.to/kaths3cdev/building-a-serverless-image-processing-pipeline-with-aws-lambda-s3-and-api-gateway-32od" className="text-primary hover:underline">
                Read More
              </a>
              <div className="flex space-x-2">
                <a href="#" aria-label="GitHub">
                  <FaGithub className="w-5 h-5 text-base-content/60 hover:text-primary" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin className="w-5 h-5 text-base-content/60 hover:text-primary" />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter className="w-5 h-5 text-base-content/60 hover:text-primary" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

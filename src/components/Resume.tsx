import { User, Briefcase, GraduationCap, Database, Mail, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import profileImage from "../assets/profile.jpg";

const Resume = () => {
  return (
    <div className="min-h-screen bg-resume-background p-4 md:p-8 print:p-0 print:bg-white">
      <Card className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6 print:p-print-margin print:shadow-none">
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-6">
          <div className="text-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-resume-primary"
            />
            <h2 className="text-xl font-semibold text-resume-text">John Doe</h2>
            <p className="text-resume-secondary">Data Engineer</p>
          </div>

          <section>
            <h3 className="flex items-center gap-2 font-semibold text-resume-primary mb-3">
              <Mail className="h-4 w-4" />
              Contact
            </h3>
            <div className="space-y-2 text-sm">
              <p>john.doe@email.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
              <a href="https://github.com/johndoe" className="flex items-center gap-1 text-resume-primary hover:underline">
                <Github className="h-4 w-4" />
                github.com/johndoe
              </a>
            </div>
          </section>

          <Separator />

          <section>
            <h3 className="flex items-center gap-2 font-semibold text-resume-primary mb-3">
              <Database className="h-4 w-4" />
              Technical Skills
            </h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-medium">Languages</h4>
                <p className="text-sm text-resume-secondary">Python, SQL, Scala</p>
              </div>
              <div>
                <h4 className="font-medium">Big Data</h4>
                <p className="text-sm text-resume-secondary">Spark, Hadoop, Kafka</p>
              </div>
              <div>
                <h4 className="font-medium">Cloud</h4>
                <p className="text-sm text-resume-secondary">AWS, GCP, Azure</p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h3 className="flex items-center gap-2 font-semibold text-resume-primary mb-3">
              <GraduationCap className="h-4 w-4" />
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">MSc in Data Science</h4>
                <p className="text-sm text-resume-secondary">Stanford University</p>
                <p className="text-sm text-resume-secondary">2018 - 2020</p>
              </div>
              <div>
                <h4 className="font-medium">BSc in Computer Science</h4>
                <p className="text-sm text-resume-secondary">MIT</p>
                <p className="text-sm text-resume-secondary">2014 - 2018</p>
              </div>
            </div>
          </section>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-2 space-y-6">
          <section>
            <h3 className="flex items-center gap-2 font-semibold text-resume-primary mb-3">
              <User className="h-4 w-4" />
              Professional Summary
            </h3>
            <p className="text-resume-text">
              Experienced Data Engineer with 5+ years of expertise in designing and implementing data pipelines, 
              ETL processes, and maintaining data warehouses. Proven track record of improving data infrastructure 
              efficiency and implementing best practices in data engineering.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="flex items-center gap-2 font-semibold text-resume-primary mb-3">
              <Briefcase className="h-4 w-4" />
              Work Experience
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Senior Data Engineer</h4>
                    <p className="text-resume-primary">Google</p>
                  </div>
                  <p className="text-sm text-resume-secondary">2020 - Present</p>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1 text-resume-text">
                  <li>Led a team of 5 engineers in developing and maintaining data pipelines processing 5TB+ daily</li>
                  <li>Implemented real-time data processing solutions using Apache Kafka and Spark Streaming</li>
                  <li>Reduced data processing costs by 40% through optimization of ETL workflows</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Data Engineer</h4>
                    <p className="text-resume-primary">Facebook</p>
                  </div>
                  <p className="text-sm text-resume-secondary">2018 - 2020</p>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1 text-resume-text">
                  <li>Designed and implemented data models for analytics and reporting systems</li>
                  <li>Built automated data quality monitoring systems</li>
                  <li>Collaborated with data scientists to optimize machine learning pipelines</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </Card>
    </div>
  );
};

export default Resume;
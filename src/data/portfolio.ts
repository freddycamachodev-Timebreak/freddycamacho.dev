export const coreTechnologies = [
  "Java", "Spring Boot", "TypeScript", "Next.js", "AWS",
] as const;

export const expertiseAreas = [
  {
    title: "Backend & integrations",
    description: "Building transactional systems, connecting enterprise services, and keeping critical workflows reliable.",
    technologies: ["Java", "Spring Boot", "REST / SOAP", "Node.js", "Express"],
  },
  {
    title: "Modern web applications",
    description: "Bringing backend capabilities to usable web interfaces and real-time communication experiences.",
    technologies: ["TypeScript", "React", "Next.js", "Socket.IO"],
  },
  {
    title: "Data & persistence",
    description: "Working with relational data, batch processes, and NoSQL storage across enterprise and product applications.",
    technologies: ["SQL", "Informix", "MySQL", "SQL Server", "Oracle", "DynamoDB"],
  },
  {
    title: "Cloud & software quality",
    description: "Delivering cloud-oriented applications with attention to deployment, code quality, and application security.",
    technologies: ["AWS", "Git", "Jenkins", "SonarQube", "Veracode"],
  },
] as const;

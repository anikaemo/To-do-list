import {
  FaLinkedin,
  FaGithub,
  FaUniversity,
  FaUserTie,
  FaCrown,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";

const AboutUs = () => {
  const teamMembers = [
    {
      id: "0622220105101004",
      name: "Asif Talukder",
      role: "Full Stack Developer",
      department: "Computer Science & Engineering",
      batch: "14th",
      university: "Khwaja Yunus Ali University",
      linkedin: "#",
      github: "#",
      image:
        "https://i.ibb.co/21dR9zGn/Screenshot-2025-05-19-at-12-08-37-AM-min.png",
      type: "normal",
    },
    {
      id: "0622220105102016",
      name: "Sadia Islam",
      role: "Frontend Developer",
      department: "Computer Science & Engineering",
      batch: "14th",
      university: "Khwaja Yunus Ali University",
      linkedin: "#",
      github: "#",
      image:
        "https://i.ibb.co/SDCNb8Sx/Screenshot-2025-05-19-at-12-28-42-AM-min.png",
      type: "normal",
    },
    {
      id: "0622220105101022",
      name: "Meshraf Ahmed",
      role: "Frontend & Analysis",
      department: "Computer Science & Engineering",
      batch: "14th",
      university: "Khwaja Yunus Ali University",
      linkedin: "#",
      github: "#",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      type: "normal",
    },
    {
      id: "0622220105102039",
      name: "Anika Sharkar",
      role: "Team Leader",
      department: "Computer Science & Engineering",
      batch: "14th",
      university: "Khwaja Yunus Ali University",
      linkedin: "#",
      github: "#",
      image:
        "https://i.ibb.co/JWKjqNfb/Screenshot-2025-05-19-at-12-03-21-AM-min.png",
      type: "special",
      specialLabel: "Team Leader",
    },
    {
      id: "FAC-001",
      name: "Md. Hasibur Rahman",
      role: "Lecturer",
      department: "Computer Science & Engineering",
      batch: "Faculty",
      university: "Khwaja Yunus Ali University",
      linkedin: "#",
      github: "#",
      image:
        "https://i.ibb.co/Sw9sRGRs/Screenshot-2025-05-19-at-12-05-12-AM-min.png",
      type: "special",
      specialLabel: "Supervisor",
    },
  ];

  const normalMembers = teamMembers.filter(
    (member) => member.type === "normal"
  );
  const specialMembers = teamMembers.filter(
    (member) => member.type === "special"
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className="block text-[#801D83]">Our Development Team</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Department of CSE - Khwaja Yunus Ali University (14th Batch)
          </p>
        </div>

        {/* Left Column - Normal Members */}
        <div className="lg:w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {normalMembers.map((member) => (
              <MemberCard key={member.id} member={member} cardType="normal" />
            ))}
          </div>
        </div>

        {/* Right Column - Special Members */}
        <div className="lg:w-full flex justify-center mt-10 gap-6">
          {specialMembers.map((member) => (
            <MemberCard key={member.id} member={member} cardType="special" />
          ))}
        </div>
      </div>
    </div>
  );
};

const MemberCard = ({ member, cardType }) => {
  const isSpecial = cardType === "special";
  const isSupervisor = member.specialLabel === "Supervisor";
  const isLeader = member.specialLabel === "Team Leader";

  return (
    <div
      className={`bg-white min-w-1/3 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
        isSpecial
          ? isSupervisor
            ? "border-t-4 border-yellow-500 hover:-translate-y-2"
            : "border-t-4 border-[#801D83] hover:-translate-y-2"
          : "hover:-translate-y-1"
      }`}
    >
      <div className="p-6">
        {/* Profile Image */}
        <div className="flex justify-center relative">
          <img
            className={`rounded-full object-cover border-4 ${
              isSpecial
                ? isSupervisor
                  ? "h-40 w-40 border-yellow-500/50"
                  : "h-40 w-40 border-[#801D83]"
                : "h-32 w-32 border-[#801D83]/30"
            }`}
            src={member.image}
            alt={member.name}
          />
          {isSpecial && (
            <div
              className={`absolute -bottom-2 ${
                isSupervisor ? "bg-yellow-500" : "bg-[#801D83]"
              } text-white px-3 py-1 rounded-full text-xs font-bold`}
            >
              {member.specialLabel}
            </div>
          )}
        </div>

        {/* Member Info */}
        <div
          className={`mt-8 text-center space-y-2 ${
            isSpecial
              ? (isSupervisor ? "bg-yellow-50/50" : "bg-[#801D83]/10") +
                " p-4 rounded-lg"
              : ""
          }`}
        >
          <h3
            className={`text-xl font-bold ${
              isSupervisor
                ? "text-yellow-700"
                : isLeader
                ? "text-[#801D83]"
                : "text-gray-900"
            }`}
          >
            {member.name}
          </h3>

          <p
            className={`flex items-center justify-center gap-1 ${
              isSupervisor
                ? "text-yellow-600"
                : isLeader
                ? "text-[#801D83]"
                : "text-gray-700"
            }`}
          >
            {isSupervisor ? (
              <FaUserTie className="text-yellow-600" />
            ) : isLeader ? (
              <FaCrown className="text-[#801D83]" />
            ) : (
              <MdWork />
            )}
            {member.role}
          </p>

          {!isSpecial && (
            <p className="text-xs text-gray-500">ID: {member.id}</p>
          )}

          <div className="pt-2 border-t border-gray-100">
            <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
              <FaUniversity
                className={
                  isSupervisor
                    ? "text-yellow-600"
                    : isLeader
                    ? "text-[#801D83]"
                    : "text-[#801D83]"
                }
              />
              {member.university}
            </p>
            <p className="text-xs text-gray-500">{member.department}</p>
            {!isSpecial && (
              <p className="text-xs text-gray-500">Batch: {member.batch}</p>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-110 transition-transform ${
              isSupervisor
                ? "text-yellow-600 hover:text-yellow-700"
                : isLeader
                ? "text-[#801D83] hover:text-[#5e1460]"
                : "text-[#801D83] hover:text-[#5e1460]"
            }`}
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-110 transition-transform ${
              isSupervisor
                ? "text-yellow-600 hover:text-yellow-700"
                : isLeader
                ? "text-[#801D83] hover:text-[#5e1460]"
                : "text-[#801D83] hover:text-[#5e1460]"
            }`}
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

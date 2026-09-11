type UserStats = {
  posts?: number;
  followers?: number;
  following?: number;
};
type User = {
  name: string;
  email: string;
  avatar: string;
  role: string;
  status: "active" | "inactive";
  stats?: UserStats;
};
type Theme = {
  backgroundColor: string;
  textColor: string;
  avatarBg: string;
  badgeBg: string;
};
type Action = {
  label: string;
  onClick: () => void;
};
type Users = {
  user: User;
  theme?: Theme;
  actions?: {
    primary: Action;
  };
};

function UserProfileCard({user, theme}: Users) {
  return (
    <div className={`p-6 rounded-xl ${theme?.backgroundColor} ${theme?.textColor}`}>
      <div>{user.avatar}</div>
      <span>{user.role}</span>
      {user.stats && (
        <div>
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key}>{value}: {key}</div>
          ))}
        </div>
      )}
    </div>
  )
}

function ComplexProps() {
  const users: Users[] = [
    {
      user: {
        name: "Mayank Puri",
        email: "mayank@gmail.com",
        avatar: "👨🏻",
        role: "Admin",
        status: "active",
        stats: {
          posts: 100,
          followers: 2000,
          following: 1000,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-b from-blue-500 to-purple-500",
        textColor: "text-gray-900",
        avatarBg: "bg-purple-500",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => console.log("View Profile"),
        },
      },
    },
  ];

  return <div className="space-y-8">
    <div>
      <h3>User Profile Card</h3>
      <div>
        {users.map((userData, index) => (
          <UserProfileCard key={index} user={userData.user} theme={userData.theme} actions={userData.actions} />
        ))}
      </div>
    </div>
  </div>;
}

export default ComplexProps;

// frontend
export const html = { img: "techs/frontend/html5.svg", name: "HTML" };
export const css = { img: "techs/frontend/css.svg", name: "CSS" };
export const javascript = { img: "techs/frontend/javascript.svg", name: "JavaScript" };
export const react = { img: "techs/frontend/react.svg", name: "React" };
export const reactRouter = { img: "techs/frontend/react_router.svg", name: "React Router" };
export const flutter = { img: "techs/frontend/flutter.svg", name: "Flutter" };

// backend
export const python = { img: "techs/backend/python.svg", name: "Python" };
export const django = { img: "techs/backend/django.svg", name: "Django REST" };
export const gunicorn = { img: "techs/backend/gunicorn.svg", name: "Gunicorn" };
export const jwt = { img: "techs/backend/jwt.svg", name: "JWT" };
export const oauth = { img: "techs/backend/oauth.svg", name: "OAuth2" };
export const dontet = { img: "techs/backend/dotnet.svg", name: ".NET" };

// devops
export const git = { img: "techs/devops/git.svg", name: "Git" };
export const github = { img: "techs/devops/github.svg", name: "GitHub" };
export const docker = { img: "techs/devops/docker.svg", name: "Docker" };
export const nginx = { img: "techs/devops/nginx.svg", name: "Nginx" };
export const gcp = { img: "techs/devops/google_cloud.svg", name: "GCP" };
export const githubActions = { img: "techs/devops/github_actions.svg", name: "GitHub Actions" };
export const k8s = { img: "techs/devops/kubernetes.svg", name: "Kubernetes" };

// databases
export const postgresql = { img: "techs/databases/postgresql.svg", name: "PostgreSQL" };
export const mongodb = { img: "techs/databases/mongodb.svg", name: "MongoDB" };
export const redis = { img: "techs/databases/redis.svg", name: "Redis" };

// others
export const arduino = { img: "techs/others/arduino.svg", name: "Arduino" };
export const cisco = { img: "techs/others/cisco.svg", name: "Cisco" };
export const latex = { img: "techs/others/latex.svg", name: "LaTeX" };

export const techs = [
  {
    category: "backend",
    items: [python, django, jwt, oauth, dontet, postgresql, mongodb, redis],
  },
  {
    category: "devops",
    items: [git, docker, nginx, gcp, githubActions],
  },
  // {
  //   category: "databases",
  //   items: [postgresql, mongodb],
  // },
   {
    category: "frontend",
    items: [html, css, javascript, react, reactRouter, flutter],
  },
  {
    category: "others",
    items: [arduino, latex],
  },
];

import { contactData } from "@/data/contactData";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-center">
      <div className="container pt-9">
        <div className="mb-3 flex justify-center">
          {contactData.map((contact) => (
            <a href={contact.href} target="_blank" className="">
              <contact.image color="#f472b6" className="h-6 w-6 m-1" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

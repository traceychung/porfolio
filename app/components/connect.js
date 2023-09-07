import { contactData } from "@/data/contactData";

export default function Connect() {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-semibold mb-2">Let's Connect 💌</h2>
      <ul>
        {contactData.map((contact) => (
          <li className="flex items-center" key={contact.id}>
            <contact.image className="mr-2" />
            <a href={contact.href} target="_blank">
              {contact.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

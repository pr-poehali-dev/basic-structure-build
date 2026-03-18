const compressors = [
  {
    id: "piston",
    label: "Поршневые компрессоры",
    tag: "Объёмного действия",
    description:
      "Работают за счёт возвратно-поступательного движения поршня в цилиндре. Обеспечивают высокое давление при относительно небольшой подаче. Применяются в химической промышленности, нефтепереработке и как компрессоры общего назначения.",
    specs: ["Давление: до 1000 бар", "Подача: 0.1–100 м³/мин", "КПД: 80–90%"],
    image:
      "https://cdn.poehali.dev/projects/be5b1463-ca9e-411e-b91d-0b47ba29abe0/files/95f30ee7-30dd-4ba6-a577-5535be7df874.jpg",
    imageAlt: "Поршневой компрессор",
  },
  {
    id: "centrifugal",
    label: "Центробежные компрессоры",
    tag: "Динамического действия",
    description:
      "Используют центробежную силу вращающегося рабочего колеса для сжатия газа. Отличаются высокой производительностью, надёжностью и компактностью. Широко применяются в газовой промышленности, энергетике и холодильных установках.",
    specs: ["Давление: до 500 бар", "Подача: 10–1000 м³/мин", "КПД: 75–85%"],
    image:
      "https://cdn.poehali.dev/projects/be5b1463-ca9e-411e-b91d-0b47ba29abe0/files/4f026c36-585f-4c7b-a8e6-499b0ff348bd.jpg",
    imageAlt: "Центробежный компрессор",
  },
  {
    id: "screw",
    label: "Винтовые компрессоры",
    tag: "Объёмного действия",
    description:
      "Принцип действия основан на зацеплении двух винтовых роторов. Обеспечивают равномерную подачу без пульсаций, тихую работу и высокую надёжность. Незаменимы в пневматических системах, деревообработке и пищевой промышленности.",
    specs: ["Давление: до 40 бар", "Подача: 0.3–50 м³/мин", "КПД: 85–95%"],
    image:
      "https://cdn.poehali.dev/projects/be5b1463-ca9e-411e-b91d-0b47ba29abe0/files/0b4bc10e-a58e-401f-bc4f-0c897bcb75c5.jpg",
    imageAlt: "Винтовой компрессор",
  },
];

export default function Featured() {
  return (
    <div id="types" className="bg-white">
      {compressors.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={item.id}
            className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 border-b border-neutral-100"
          >
            <div
              className={`flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 ${isEven ? "lg:order-2" : "lg:order-1"}`}
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`flex-1 text-left lg:h-[800px] flex flex-col justify-center gap-6 ${isEven ? "lg:mr-12 lg:order-1" : "lg:ml-12 lg:order-2"}`}
            >
              <span className="uppercase text-sm tracking-widest text-neutral-400">
                {item.tag}
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                {item.label}
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-lg">
                {item.description}
              </p>
              <ul className="flex flex-col gap-2">
                {item.specs.map((spec) => (
                  <li
                    key={spec}
                    className="flex items-center gap-3 text-sm text-neutral-700"
                  >
                    <span className="w-2 h-2 bg-neutral-900 rounded-full shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
              <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide mt-2">
                Подробнее
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

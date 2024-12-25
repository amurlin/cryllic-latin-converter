import { cyrillicToLatin } from "./node.js";

console.log(
  cyrillicToLatin(
    "2024 он гарсан эхний өдөр Япон улсын Ишикава мужид 7.6 магнитудын хүчтэй газар хөдөлсөн. Улмаар цүнамигийн түгшүүр хүртэл зарлахад хүрч байв. Энэ нь 2011 оноос хойш болсон хамгийн хүчтэй, их хэмжээний хохиролтой газар хөдлөлт болсон. Үүний улмаас 200 гаруй хүн амиа алдсан юм."
  )
);

import { latinToCyrillic } from "./node.js";

console.log(
  latinToCyrillic(
    "2024 on garsan ekhnii odor Yapon ulsiin Ishikava mujid 7.6 magnitudiin khuchtei gazar khodolson. Ulmaar tsunamigiin tugshuur khurtel zarlakhad khurch baiv. Ene nь 2011 onoos khoish bolson khamgiin khuchtei, ikh khemjeenii khokhiroltoi gazar khodlolt bolson. Uunii ulmaas 200 garui khun amia aldsan yum."
  )
);
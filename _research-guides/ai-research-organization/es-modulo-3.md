---
layout: guide
title: "Módulo 3 — Organiza Tus Datos con IA"
description: "Convierte transcripciones, notas y texto narrativo en tablas estructuradas, fechas estandarizadas y datos listos para GEDCOM usando indicaciones de IA dirigidas."
difficulty: beginner
lang: es
permalink: /es/guias-investigacion/ia-investigacion-organizacion-modulo-3/
ref: ai-research-organization-module-3
last_modified_at: 2026-03-05
related_guides:
  - /es/guias-investigacion/ia-investigacion-organizacion/
  - /es/ia-mejores-practicas/
---

*Parte del curso [Herramientas de IA para Investigación y Organización](/es/guias-investigacion/ia-investigacion-organizacion/).*

---

## Objetivos de Aprendizaje

Al finalizar este módulo, podrás:

- Saber cómo usar la IA para extraer datos estructurados de transcripciones que proporciones
- Estandarizar nombres, fechas y nombres de lugares en un conjunto de datos
- Comprender cómo convertir texto narrativo en datos compatibles con GEDCOM
- Saber cómo conectar el resultado organizado por la IA a tu registro de investigación

---

## El Problema de la Organización

Los genealogistas acumulan datos en muchos formatos: transcripciones en PDF, notas escritas a mano, fotos de documentos, grabaciones de historia oral, fragmentos de libros y notas largas de entrevistas con familiares. Cuando investigas una familia a través de múltiples sistemas de registros -- colonial español, federal estadounidense, eclesiástico y civil -- el nombre de la misma persona puede aparecer en docenas de variaciones en docenas de archivos.

La IA no puede recuperar registros por ti, pero es excepcionalmente buena para tomar el texto sin estructura que le proporcionas y devolverlo en un formato consistente y organizado. Este módulo cubre tres flujos de trabajo: extraer datos en tablas, estandarizar nombres y fechas, y convertir narrativa a formato GEDCOM.

---

## Flujo de Trabajo 1: Extraer Datos en Tablas

El uso más inmediato de la IA para la organización de datos es convertir un lote de transcripciones en una tabla estructurada. En lugar de copiar manualmente cada campo de cada registro, pegas las transcripciones y le indicas a la IA exactamente qué columnas quieres.

**Plantilla de indicación:**

> Tengo un conjunto de transcripciones de [tipo de registro] de [lugar], aproximadamente [rango de fechas]. Por favor, extrae los datos en una tabla Markdown con estos encabezados de columna exactos: [lista tus encabezados]. Si un campo no está presente en un registro, escribe "no registrado" en esa celda. No inferas ni agregues información que no esté en la transcripción. Señala las lecturas inciertas con [?].
>
> [Pega las transcripciones aquí]

**Ejemplo -- registros bautismales de un libro parroquial:**

> Tengo un conjunto de transcripciones de registros bautismales de un libro parroquial de Utuado, Puerto Rico, aproximadamente 1870--1880. Por favor, extrae los datos en una tabla Markdown con estos encabezados de columna exactos: Fecha de Bautismo, Nombre del Niño, Nombre del Padre, Nombre de la Madre, Abuelos Paternos, Abuelos Maternos, Sacerdote Oficiante, Notas. Si un campo no está presente en un registro, escribe "no registrado" en esa celda. No inferas ni agregues información que no esté en la transcripción. Señala las lecturas inciertas con [?].
>
> En 12 de junio de 1875 bauticé a Ricardo, hijo legítimo de Manuel Ortiz y Rosa Santiago. Abuelos pat: Pedro Ortiz y Julia Ramos. Mat: Jose Santiago y Maria Colon. Cura: P. Medina.
>
> En 3 de agosto de 1876 bauticé a Luisa, hija legítima de Rafael Torres y Carmen Rivera. Abuelos pat: no constan. Mat: Francisco Rivera y Ana Vega. Cura: P. Medina.

**Lo que la IA devuelve:**

| Fecha de Bautismo | Nombre del Niño | Nombre del Padre | Nombre de la Madre | Abuelos Paternos | Abuelos Maternos | Sacerdote Oficiante | Notas |
|-------------------|----------------|-----------------|-------------------|-----------------|-----------------|--------------------|----|
| 12 de junio de 1875 | Ricardo Ortiz Santiago | Manuel Ortiz | Rosa Santiago | Pedro Ortiz, Julia Ramos | Jose Santiago, Maria Colon | P. Medina | |
| 3 de agosto de 1876 | Luisa Torres Rivera | Rafael Torres | Carmen Rivera | no registrado | Francisco Rivera, Ana Vega | P. Medina | |

**Importante:** Revisa cada celda contra la transcripción original. La IA puede agregar silenciosamente el apellido de un niño (como se muestra arriba -- "Ricardo Ortiz Santiago" se infiere de los nombres de los padres, no se indica en el registro). Señala cualquier campo que la IA completó más allá de lo que la transcripción indica.

---

## Flujo de Trabajo 2: Estandarizar Nombres, Fechas y Lugares

Cuando tienes un conjunto de datos con ortografías inconsistentes, formatos de fecha y nombres de lugares, la IA puede revisar el conjunto completo y proponer versiones estandarizadas para tu revisión.

**Qué estandarizar:**

- **Fechas:** Convierte "15 de agosto, 1900," "Aug 15 1900" y "8/15/1900" a un formato único como ISO 8601 (1900-08-15) o un formato compatible con tu software genealógico
- **Nombres de lugares:** Identifica que "Bayamon," "Bayamón" y "Pueblo de Bayamón" se refieren al mismo municipio
- **Ortografía de apellidos:** Señala que "Jimenez," "Jiménez" y "Gimenez" pueden ser el mismo apellido y propone una forma estandarizada
- **Nombres de pila:** Nota que "María de los Ángeles," "María de los Angeles" y "M. de los Ángeles" parecen ser la misma persona

**Plantilla de indicación:**

> Tengo un conjunto de datos de registros genealógicos de Puerto Rico. Por favor, revisa estas entradas y: (1) estandariza todas las fechas al formato AAAA-MM-DD, (2) identifica variantes de nombres de lugares que probablemente se refieran al mismo lugar y propone una forma estándar, (3) señala ortografías de apellidos que puedan ser variantes fonéticas del mismo nombre, (4) señala variantes de nombres de pila que puedan referirse a la misma persona. No cambies ningún dato -- devuelve una tabla que muestre el valor original, tu forma estándar propuesta y tu nivel de confianza (alto / medio / incierto).
>
> [Pega el conjunto de datos aquí]

**Usar el resultado:** Las estandarizaciones propuestas por la IA son un punto de partida, no una decisión. Revisa cada sugerencia, verifícala contra los registros originales o una fuente de referencia, y realiza los cambios en tu propio conjunto de datos de forma deliberada.

---

## Flujo de Trabajo 3: Convertir Narrativa a Datos Compatibles con GEDCOM

Uno de los usos más potentes de la IA para la organización es convertir historias familiares escritas o notas genealógicas compiladas en datos estructurados GEDCOM. GEDCOM (Genealogical Data Communication) es el formato de archivo estándar utilizado por FamilySearch, Ancestry y la mayoría del software genealógico.

La IA no puede crear un archivo GEDCOM verificado -- eso requiere que confirmes cada dato contra fuentes originales. Pero puede convertir una narrativa en los campos de datos estructurados que requiere un archivo GEDCOM, los cuales luego verificas e importas en tu software.

**Plantilla de indicación:**

> Voy a proporcionar una narrativa de historia familiar escrita. Por favor, extrae los datos genealógicos y devuélvelos como una lista estructurada de individuos, con los siguientes campos para cada persona: Nombre completo, Fecha de nacimiento, Lugar de nacimiento, Fecha de defunción, Lugar de defunción, Nombre del padre, Nombre de la madre, Nombre del cónyuge, Fecha de matrimonio, Lugar de matrimonio, Nombres de los hijos. Marca cualquier campo donde la información sea inferida en lugar de indicada directamente. Marca cualquier campo donde la información sea incierta.
>
> [Pega la narrativa aquí]

**Ejemplo de entrada:**

> Juan Rivera nació alrededor de 1855 en Rincón, Puerto Rico. Se casó con Petra Morales en algún momento de la década de 1870. Tuvieron al menos tres hijos: Luis, nacido ca. 1878; Carmen, nacida ca. 1881; y Rosa, nacida ca. 1885. Juan murió antes de 1910, ya que Petra aparece como viuda en el censo de ese año. Los padres de Petra eran Francisco Morales y Dolores Vega, ambos de Añasco.

**Ejemplo de estructura de salida:**

```
Individuo: Juan Rivera
  Nacimiento: ca. 1855, Rincón, Puerto Rico [indicado]
  Defunción: antes de 1910 [inferido del estado de viuda del cónyuge en el censo de 1910]
  Padre: no indicado
  Madre: no indicada
  Cónyuge: Petra Morales
  Matrimonio: ca. 1870s, lugar no indicado [inferido de los años de nacimiento de los hijos]
  Hijos: Luis Rivera Morales (ca. 1878), Carmen Rivera Morales (ca. 1881), Rosa Rivera Morales (ca. 1885)

Individuo: Petra Morales
  Nacimiento: no indicado
  Defunción: después de 1910 [inferido]
  Padre: Francisco Morales [indicado]
  Madre: Dolores Vega [indicada]
  Lugar de nacimiento de los padres: Añasco, Puerto Rico [indicado]
  Cónyuge: Juan Rivera
  Hijos: Luis, Carmen, Rosa
```

Observa que la IA señala correctamente las inferencias (fecha de defunción inferida del estado de viuda) y nota dónde no se indica la información. Esto es lo que produce una indicación bien redactada. Revisa cada campo antes de ingresarlo en tu software genealógico.

---

## Punto de Control GPS

**¿Dónde aplica el GPS a los datos organizados?**

La organización no es un elemento del GPS -- es una condición práctica previa para aplicar el GPS. Pero cómo organizas tus datos tiene consecuencias para el GPS:

- **Las citas de fuentes deben sobrevivir a la organización.** Cuando extraes datos en una tabla, la cita de la fuente para cada fila debe conservarse. Un dato sin cita no puede verificarse.
- **Las inferencias deben etiquetarse.** Cuando la IA infiere el apellido de un niño a partir de los nombres de los padres, o infiere una fecha de defunción a partir del estado de viuda, esa inferencia debe etiquetarse. Las inferencias sin etiquetar se convierten en datos no verificables.
- **La estandarización no es transcripción.** Cuando estandarizas "Bayamón" a partir de "Bayamon," estás tomando una decisión editorial. Anótalo.

**Regla práctica:** Añade una columna "Fuente" a cada tabla de extracción. Nunca dejes que exista una fila sin una cita que la vincule a la imagen del registro original.

---

## Conectar el Resultado de la IA a Tu Registro de Investigación

Los datos organizados por la IA son más útiles cuando se conectan directamente a tu registro de investigación. Después de cualquier sesión de extracción con IA:

1. **Guarda el resultado bruto de la IA** -- pégalo en tus notas antes de editar nada
2. **Añade citas de fuentes** -- vincula cada fila de vuelta al registro original
3. **Señala las inferencias de la IA** -- marca todo lo que la IA añadió más allá de lo que indica la fuente
4. **Anota lo que verificaste** -- registra qué celdas confirmaste contra la imagen original y cuáles siguen pendientes

Si usas una hoja de cálculo como registro de investigación, añade columnas para "Fuente," "Inferido por IA (S/N)" y "Verificado contra original (S/N)." Estas columnas te protegen de tratar datos organizados como datos confirmados.

---

## ¿Qué Sigue?

En el [Módulo 4 -- Planificación de la Investigación: Superar Muros de Ladrillo](/es/guias-investigacion/ia-investigacion-organizacion-modulo-4/), aprenderás a usar la IA para auditar tu cronología de investigación, identificar lagunas, generar hipótesis y crear un plan de investigación estructurado para ancestros que desaparecen de los registros.

---

*[← Módulo 2](/es/guias-investigacion/ia-investigacion-organizacion-modulo-2/) · [Volver a la Descripción del Curso](/es/guias-investigacion/ia-investigacion-organizacion/) · [Módulo 4 →](/es/guias-investigacion/ia-investigacion-organizacion-modulo-4/)*

<a href="/assets/pdfs/ai-research-organization/ES_Modulo_3_Organizar_Datos.pdf" target="_blank" rel="noopener noreferrer">⬇ Descargar este módulo como PDF</a>

---

*© 2026 Sylvia Vargas. Teaching Genealogists AI™. Todos los derechos reservados.*

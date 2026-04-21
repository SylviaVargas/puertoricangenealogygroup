---
layout: guide
title: "Módulo 2 — Coincidencia de Registros: Resolver el Problema de los Nombres Comunes"
description: "Usa la IA para comparar dos registros y evaluar si pertenecen a la misma persona, incluyendo cómo manejar variaciones de nombres, diferencias de ortografía fonética y nombres repetidos en generaciones en la genealogía puertorriqueña."
difficulty: beginner
lang: es
permalink: /es/guias-investigacion/ia-investigacion-organizacion-modulo-2/
ref: ai-research-organization-module-2
last_modified_at: 2026-03-05
related_guides:
  - /es/guias-investigacion/ia-investigacion-organizacion/
  - /es/ia-mejores-practicas/
---

*Parte del curso [Herramientas de IA para Investigación y Organización](/es/guias-investigacion/ia-investigacion-organizacion/).*

---

## Objetivos de Aprendizaje

Al finalizar este módulo, podrás:

- Comprender por qué los nombres comunes puertorriqueños crean desafíos para la coincidencia de registros
- Saber cómo redactar una indicación de comparación que produzca un análisis útil de la IA
- Reconocer los tipos de evidencia que la IA puede identificar -- y dónde su evaluación debe verificarse
- Aplicar el Marco de Tres Capas del GPS para evaluar cualquier coincidencia asistida por IA

---

## El Problema de los Nombres Comunes en la Genealogía Puertorriqueña

La genealogía puertorriqueña presenta regularmente tres desafíos para la coincidencia de nombres:

**Nombres repetidos en generaciones.** Los nombres religiosos (José, María, Juan, Carmen) eran muy comunes, y muchas familias reutilizaban el mismo nombre de pila en generaciones consecutivas. Una búsqueda de "José Rivera" en Utuado entre 1880 y 1920 puede arrojar docenas de resultados de la misma familia.

**Variaciones de nombres entre sistemas de registros.** La misma persona puede aparecer como *José* en un registro de iglesia, *Joseph* en un censo federal estadounidense y *Joe* en una tarjeta de registro de reclutamiento. La ortografía de los apellidos también cambia: *Jiménez* se convierte en *Gimenez* o *Jimenez* según quién escribió el registro y cuándo.

**Apellidos omitidos o agregados.** En las convenciones de nombres puertorriqueñas, una persona lleva dos apellidos: el primer apellido del padre y el primer apellido de la madre. Los registros, especialmente los documentos de la era estadounidense, frecuentemente omiten el apellido materno. *Rivera Torres* se convierte en *Rivera* -- o en ocasiones solo aparece *Torres* si el enumerador registró el apellido incorrecto primero.

La IA maneja estos tres desafíos de manera razonable cuando le proporcionas la indicación correcta.

---

## Cómo Aborda la IA la Coincidencia de Registros

La IA no busca en bases de datos. Compara el texto que le proporcionas. Cuando pegas dos transcripciones de registros y pides una comparación, la IA busca:

- **Consistencia de edad:** ¿La edad en el registro A coincide con la edad esperada en el registro B dado el tiempo transcurrido entre ambos?
- **Consistencia geográfica:** ¿Los lugares son el mismo municipio, pueblos vecinos o una ruta de migración plausible?
- **Superposición del grupo familiar:** ¿Aparecen los mismos miembros de la familia (cónyuge, hijos, padres, hermanos) en ambos registros?
- **Equivalencia fonética:** ¿Las ortografías de los nombres son fonéticamente idénticas o lo suficientemente similares como para ser el mismo nombre?
- **Lógica de apellidos:** ¿La aparente diferencia de nombre sigue un patrón de nombres puertorriqueño conocido (apellido materno omitido, anglicización de la era estadounidense)?

La IA te dará un análisis, no un veredicto. La decisión -- si dos registros pertenecen a la misma persona -- sigue siendo tuya.

---

## La Indicación de Comparación

Usa esta estructura de indicación cuando le pidas a la IA que compare dos registros. Reemplaza el texto entre corchetes con tus transcripciones reales.

**Indicación:**

> Soy genealogista que investiga familias puertorriqueñas. Tengo dos registros que pueden referirse a la misma persona. Por favor, compáralos y evalúa la probabilidad de que pertenezcan al mismo individuo. Analiza: consistencia de edad (teniendo en cuenta los años entre registros), consistencia geográfica, superposición del grupo familiar (miembros de la familia compartidos), variaciones en la ortografía de nombres y convenciones de apellidos puertorriqueños (apellido materno omitido, anglicización). Enumera la evidencia que apoya, la evidencia que contradice y las preguntas sin resolver. No llegues a una conclusión por mí -- presenta la evidencia para que yo pueda evaluarla.
>
> **Registro A:** [Pega la transcripción del primer registro]
>
> **Registro B:** [Pega la transcripción del segundo registro]

---

## Ejemplo Práctico: Censo a Certificado de Defunción

Este ejemplo usa el escenario de la estrategia de contenido del curso, ampliado con análisis del GPS.

**Registro A -- Censo Federal de EE. UU. de 1910, Utuado, Puerto Rico:**

> José Rivera, jefe de hogar, edad 25. Esposa: María. Hijo: Pablo, edad 3.

**Registro B -- Certificado de Defunción de 1945, Utuado, Puerto Rico:**

> José Rivera Torres, edad 61. Causa de muerte: insuficiencia cardíaca. Cónyuge: María Delgado. Padres: Luis Rivera y Elena Torres.

**La indicación** (usando la plantilla anterior) produce este tipo de análisis:

**Evidencia que apoya:**
- La edad es consistente: la edad 25 en 1910 serían aproximadamente 60--61 en 1945. (Coincide.)
- La ubicación es consistente: ambos registros ubican a esta persona en Utuado.
- El nombre del cónyuge es consistente: "María" en 1910 coincide con "María Delgado" en 1945. (El censo de 1910 a menudo registraba solo el nombre de pila de los cónyuges.)
- Lógica de apellidos: "Rivera Torres" en 1945 es el apellido doble completo. "Rivera" en 1910 es solo el apellido paterno -- consistente con cómo los enumeradores estadounidenses registraban los nombres puertorriqueños.

**Evidencia contradictoria:**
- No se identifican contradicciones en la información proporcionada.

**Preguntas sin resolver:**
- El censo de 1910 no registra los padres de José. El certificado de defunción nombra a Luis Rivera y Elena Torres como padres. Estos no se pueden confirmar solo con estos dos registros.
- Pablo, de 3 años en 1910, no aparece en el certificado de defunción. Se desconoce su presencia o ausencia en registros posteriores.

---

## Punto de Control GPS: Evaluar Esta Coincidencia

El análisis de la IA es evidencia útil, pero no es una conclusión que cumpla con el GPS. Antes de tratar estos dos registros como pertenecientes a la misma persona, aplica el Marco de Tres Capas:

**Análisis de fuentes:**
- Registro A (Censo Federal de EE. UU. de 1910): Fuente derivada (imagen digitalizada de un formulario de enumeración original). Calidad de la información para edad y ubicación: primaria si José la proporcionó él mismo, secundaria si un vecino o familiar informó por el hogar. Evidencia: directa para nombre y ubicación, indirecta para la coincidencia de identidad.
- Registro B (Certificado de Defunción de 1945): Fuente derivada (imagen digitalizada de un registro civil original). Calidad de la información para edad y ubicación al momento de la muerte: secundaria (el informante suele ser un familiar, no el fallecido). Información sobre los nombres de los padres: potencialmente primaria si el informante conocía directamente a los padres, secundaria si se basó en el conocimiento familiar.

**Lo que la IA no puede hacer:** La IA no examinó las imágenes originales. No evaluó la escritura, verificó alteraciones ni señaló si el enumerador registró otros hogares cercanos que pudieran añadir contexto. No tenía información sobre el informante en el certificado de defunción.

**Tu próximo paso:** Verifica ambos registros contra las imágenes originales en FamilySearch. Busca a Pablo Rivera (nacido ca. 1907, Utuado) en censos posteriores para corroborar el núcleo familiar. Busca un acta de matrimonio de José Rivera y María Delgado en el registro civil de Utuado para añadir una tercera fuente corroborante.

---

## Manejo de Variaciones de Nombres: Una Guía Práctica

Cuando los nombres en dos registros no coinciden exactamente, usa esta tabla para evaluar si la variación es un patrón conocido o una discrepancia genuina:

| Tipo de Variación | Ejemplo | Explicación Probable | Acción |
|-------------------|---------|---------------------|--------|
| Apellido materno omitido | Rivera Torres vs. Rivera | Convención del enumerador estadounidense | Coincidencia probable -- verifica con un tercer registro |
| Ortografía fonética | Jiménez vs. Gimenez | El enumerador transcribió de oído | Coincidencia probable -- verifica edad y ubicación |
| Anglicización | José vs. Joseph | Registros de la era estadounidense | Coincidencia probable -- verifica grupo familiar |
| Abreviatura del nombre de pila | María de los Ángeles vs. María | Práctica común | Coincidencia probable -- verifica grupo familiar |
| Apellido incorrecto primero | Rivera Torres vs. Torres Rivera | Error del enumerador | Posible coincidencia -- verifica padres |
| Nombre completamente diferente | José vs. Juan | Posible error o persona diferente | Investiga más antes de concluir coincidencia |

Cuando una variación no se explica por ningún patrón conocido, trátala como evidencia contradictoria y documéntala explícitamente antes de llegar a una conclusión.

---

## Cuando la IA Se Equivoca en la Coincidencia

A veces la IA identificará una coincidencia plausible que en realidad son dos personas diferentes, o no detectará una coincidencia por una ortografía inesperada. Presta atención a estas señales:

- La IA expresa alta confianza basada solo en edad y ubicación, sin superposición del grupo familiar
- El grupo familiar en un registro (cónyuge, hijos) no aparece en absoluto en el otro
- Las ubicaciones geográficas están en la misma región general pero en municipios diferentes sin ruta de migración documentada
- La diferencia de edad es de más de cinco años y no se ofrece ninguna explicación

Cuando veas estas señales, trata la coincidencia como no confirmada. Documenta lo que encontraste, registra por qué no puedes confirmarlo y busca una tercera fuente antes de llegar a una conclusión.

---

## ¿Qué Sigue?

En el [Módulo 3 -- Organiza Tus Datos con IA](/es/guias-investigacion/ia-investigacion-organizacion-modulo-3/), aprenderás a convertir transcripciones sin procesar, notas y texto narrativo en tablas estructuradas, fechas estandarizadas y datos listos para GEDCOM usando indicaciones de IA dirigidas.

---

*[← Módulo 1](/es/guias-investigacion/ia-investigacion-organizacion-modulo-1/) · [Volver a la Descripción del Curso](/es/guias-investigacion/ia-investigacion-organizacion/) · [Módulo 3 →](/es/guias-investigacion/ia-investigacion-organizacion-modulo-3/)*

<a href="/assets/pdfs/ai-research-organization/ES_Modulo_2_Coincidencia_Registros.pdf" target="_blank" rel="noopener noreferrer">⬇ Descargar este módulo como PDF</a>

---

*© 2026 Sylvia Vargas. Teaching Genealogists AI™. Todos los derechos reservados.*

import { GoogleGenAI } from '@google/genai'
import { NextResponse } from 'next/server'
import { connect } from '@/lib/db'
import { testPrompt } from '@/prompts/test-prompts'

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
})

export async function GET (request: Request): Promise<NextResponse> {
  await connect()
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: [
      {
        text: testPrompt
      }
    ],
    config: {
      responseMimeType: 'application/json'
      // responseSchema: {
      //   type: Type.OBJECT,
      //   properties: {
      //     title: {
      //       type: Type.STRING,
      //       description: 'Le titre de l\'histoire'
      //     },
      //     content: {
      //       type: Type.STRING,
      //       description: 'Le contenu de l\'histoire'
      //     },
      //     characters: {
      //       type: Type.ARRAY,
      //       description: 'Les personnages de l\'histoire',
      //       items: {
      //         type: Type.OBJECT,
      //         properties: {
      //           name: { type: Type.STRING, description: 'Le nom du personnage' },
      //           description: { type: Type.STRING, description: 'La description du personnage' }
      //         }
      //       }
      //     }
      //   }
      // }
    }
  })

  const result = JSON.parse(String(response.text))

  return NextResponse.json(result)
}

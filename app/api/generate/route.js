import {NextResponse} from 'next/server'
import OpenAI from 'openai'

const systemPrompt = `
You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic or content. Follow these guidlines:

1. Create clear and concise questions for the front of the flashcard.
2. Provide accurate and informative answers for the back of the flashcard.
3. Ensure that each flashcards focuses on a single concept or piece of information.
4. Use simple language to make the flashcards accessible to a wide range of learners.
5. Include a variety of question types, such as definitions, examples, comparisons, and applications.
6. Avoids overly complex or ambiguous phrasing in both questions and answers.
7. When appropriate, use mnemonics or memory aids to help reinforce the information.
8. Tailor the difficulty level of the flashcards to the user's specified preferences.
9. If given a full body of text, extract the most important and relevant information for the flashcards.
10. Aim to create a balanced set of flashcards that covers the topic comprehensively. The goal is to facilitate effective learning and retention of information through these flashcards.
11. Generate only 10 flashcards. Do not provide any extra messages, just provide the flashcards in the JSON format as specified below.

Return in the following JSON format:
{
    "flashcards":[
        {
            "front": str,
            "back": str
        }
    ]
}
`

export async function POST (req){
    const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: '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'
    })

    const data = await req.text()
    const completion = await openai.chat.completions.create({
        model: "meta-llama/llama-3.1-8b-instruct:free",
        messages: [{role: "system", content: systemPrompt},
            {role: 'user', content: data},
        ],
    response_format:{type: 'json_object'}    
    })

    console.log(completion.choices[0].message.content)

    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards)
}
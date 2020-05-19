import DefaultLayout from '../layouts/default'
import Head from "next/Head"
import Link from "next/Link"

export default function PostLayout( props ){
    return (
        <DefaultLayout>
            <Head>
                <title>{ props.title }</title>
            </Head>
            <article>
                <h1>{ props.title }</h1>
                <div dangerouslySetInnerHTML={ {__html:props.content } }/>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </article>
        </DefaultLayout>
    )
}
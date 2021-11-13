function getTopics() {
    const input = document.getElementById('input')
    input.addEventListener('change', fillArrays)

    function fillArrays() {
        let topics = []
        let contributors = []
        let sampleTopics = []
        let sampleContributors = []
        let indices = []
        readXlsxFile(input.files[0]).then((rows) => {
            for (i in rows) {
                for (j in rows[i]) {
                    if (j == 0) {
                        topics.push(rows[i][j])
                    } else {
                        contributors.push(rows[i][j])
                    }
                }
            }
            sampleTopics = _.sample(topics, 3)
            for (let topic of sampleTopics) {
                indices.push(topics.indexOf(topic))
            }
            for (let index of indices) {
                sampleContributors.push(contributors[index])
            }
            console.log(sampleTopics)
            console.log(sampleContributors)

            let inputFields = Array.from(document.querySelectorAll("input"))

            let firstTopic = inputFields[0]
            firstTopic.value = sampleTopics[0]

            let firstContributor = inputFields[1]
            firstContributor.value = sampleContributors[0]

            let secondTopic = inputFields[2]
            secondTopic.value = sampleTopics[1]

            let secondContributor = inputFields[3]
            secondContributor.value = sampleContributors[1]

            let thirdTopic = inputFields[4]
            thirdTopic.value = sampleTopics[2]

            let fourthContributor = inputFields[5]
            fourthContributor.value = sampleContributors[2]
        })

    }
}
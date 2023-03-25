import Summary from '../model/Summary.js';


export const createNewSummary = async (data) => {
    const {url, title, text, keywords} = data;
    try {
        const newSummary = await Summary.create({
            url,
            title,
            text,
            keywords,
            createdAt: Date.now()
        })
        await newSummary.save();

        return newSummary;
    } catch (error) {
        console.log(error);
    }
}


export const addNewSummary = async (request, response) => {
    try {
        const newSummary = await createNewSummary(request.body);
        return response.status(200).json(newSummary);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getAllSummary = async (request, response) => {
    try {
        const summaries = await Summary.find({}).sort({ 'createdAt': -1 })
        return response.status(200).json(summaries);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const updateSummary = async (request, response) => {
    try {
        await Summary.findOneAndUpdate(
            { _id: request.params.id },
            { title: request.body.title }
        )
        await Summary.findOneAndUpdate(
            { _id: request.params.id },
            { text: request.body.text }
        )
        const summary = await Summary.findById(request.params.id);
        return response.status(200).json(summary);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const deleteSummary = async (request, response) => {
    try {
        const summary = await Summary.findByIdAndDelete(request.params.id)
        return response.status(200).json(summary);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const updateKeyword = async (request, response) => {
    const { newKeyword } = request.body;
    try {
        const summary = await Summary.findById(request.params.id);
        if (!summary.keywords.includes(newKeyword)) {
            await summary.updateOne({$push: { keywords: newKeyword } });
        } else {
            await summary.updateOne({ $pull: { keywords: newKeyword } });
        }
        return response.status(200).json(summary);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
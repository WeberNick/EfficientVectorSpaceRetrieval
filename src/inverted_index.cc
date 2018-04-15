#include "inverted_index.hh"

InvertedIndex::InvertedIndex() : 
    _cb(nullptr),
    _term_posting_map()
{
    this->init();
}

InvertedIndex::~InvertedIndex() {}

void InvertedIndex::init() {
    this->buildInvertedIndex();
}

void InvertedIndex::init(const control_block_t& aCB) {
    _cb = &aCB;
}

void InvertedIndex::buildInvertedIndex() {
    str_float_mt tf_out;
    postinglist_mt postinglist_out;
    Utility::IR::calcMaps(DocumentManager::getInstance().getDocumentMap(), postinglist_out);
    this->_term_posting_map = postinglist_out;
}

bool InvertedIndex::insert(const std::string& aTerm, const PostingList& aPostingList) {
    return _term_posting_map.insert(std::make_pair(aTerm, aPostingList)).second; // copy constructor required
}

posting_map_iter_t InvertedIndex::find(const std::string& aKey) {
    return _term_posting_map.find(aKey);
}

void InvertedIndex::erase(const std::string& aKey) {
    _term_posting_map.erase(aKey);
}

void InvertedIndex::erase(const posting_map_iter_t aIterator) {
    _term_posting_map.erase(aIterator);
}

const PostingList& InvertedIndex::getPostingList(const std::string& aTerm) const {
    if (_term_posting_map.find(aTerm) != _term_posting_map.end())
        return _term_posting_map.at(aTerm);
    else
        throw InvalidArgumentException(__FILE__, __LINE__, __PRETTY_FUNCTION__, "The term " + aTerm + " doest not appear in the document Collection.");
}

size_t InvertedIndex::getNoDocs(const std::string& aTerm) {
    if (_term_posting_map.find(aTerm) != _term_posting_map.end())
        return _term_posting_map.at(aTerm).getPosting().size();
    else
        throw InvalidArgumentException(__FILE__, __LINE__, __PRETTY_FUNCTION__, "The term " + aTerm + " doest not appear in the document Collection.");
}
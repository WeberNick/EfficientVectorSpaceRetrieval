/**
 *	@file 	cluster.hh
 *	@author	Nick Weber (nickwebe@pi3.informatik.uni-mannheim.de)
 *	@brief  Implements the pre-clustering functionality for documents	
 *	@bugs 	Currently no bugs known
 *	@todos	A cluster can be created and it will automatically initiated itself.
 *	        But: need to add functionality.
 *
 *	@section DESCRIPTION
 *	TODO
 */
#pragma once

#include "document.hh"
#include "document_manager.hh"
#include "query_processing_engine.hh"
#include "types.hh"
#include "utility.hh"

#include <algorithm>
#include <cmath>
#include <random>
#include <unordered_map>
#include <vector>

class Cluster
{
    friend class IndexManager;

    public:
        using cluster_mt = std::unordered_map<const Document*, doc_ptr_vt>;

    private:
        explicit Cluster();
        Cluster(const Cluster&) = default;
        Cluster(Cluster&&) = delete;
        Cluster& operator=(const Cluster&) = delete;
        Cluster& operator=(Cluster&&) = delete;
        ~Cluster();

    private:
        /**
         * @brief Get the Cluster Singleton instance.
         *
         * @return Cluster& a reference to the Cluster Singleton instance.
         */
        inline static Cluster& getInstance() {
          static Cluster lInstance;
          return lInstance;
        }
        /**
         * @brief Initialize control block and cluster
         *
         * @param aControlBlock the control block
         */
        void init(const CB& aControlBlock);
        /**
         * @brief Choose Leaders
         * 
         */
        void chooseLeaders();
        /**
         * @brief Fill Clusters
         * 
         */
        void fillCluster();

    public:
        /**
         * @brief Get the Leaders object
         * 
         * @return const doc_ptr_vt& 
         */
        inline const doc_ptr_vt& getLeaders() { return _leaders; }
        /**
         * @brief Get the Cluster object
         * 
         * @return const cluster_mt& 
         */
        inline const cluster_mt& getCluster() { return _cluster; }

    private:
        const CB* _cb;

        bool _init;          // was the cluster initialized?
        doc_ptr_vt _leaders; // stores pointer to leader documents inside the doc mngr's map
        cluster_mt _cluster; // stores <Doc*, Vector<Doc*>> pairs, the first pointer is a leader document
};


